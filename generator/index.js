const gitTagsRemote = require('git-tags-remote')
const repoPath = 'https://github.com/mdbootstrap/Vue-Bootstrap-with-Material-Design.git'
let latestTag = '5.4.0'

gitTagsRemote.latest(repoPath).then(tags => {
  latestTag = Array.from(tags)[0]
})

// check if mdb is installed
const { exec } = require('shelljs');
const fs = require('fs')
const packageJson = fs.readFileSync('./package.json', { encoding: 'utf-8' })
const packageJsonLines = packageJson.split(/\r?\n/g)
const packageJsonLinesIndex = packageJsonLines.findIndex(line => line.match(/mdbvue/))

module.exports = (api, options) => {

  // uninstall mdb if exists
  if (options.mode === 'Existing app' && packageJsonLinesIndex >= 0) {
    exec('yarn remove mdbvue')
  }

  if (options.version === 'Free') {
    api.extendPackage({
      scripts: {
        start: 'vue-cli-service serve --open'
      },
      dependencies: {
        'mdbvue': latestTag
      },
      devDependencies: {
        'eslint-plugin-html': '^5.0.5',
        'eslint-plugin-vue-libs': '^3.0.0'
      }
    })

  } else {

    api.extendPackage({
      scripts: {
        start: 'vue-cli-service serve --open'
      },
      dependencies: {
        'mdbvue': `git+https://oauth2:${options.token}@git.mdbootstrap.com/mdb/vue/vu-pro.git`
      },
      devDependencies: {
        'eslint-plugin-html': '^5.0.5',
        'eslint-plugin-vue-libs': '^3.0.0'
      }
    })

  }

  // rendering new files
  if (options.mode === 'New app') {
    api.render('./templates/newApp')
  } else if (options.mode === 'Demo') {
    if (options.version === 'Free') {
      api.render('./templates/demoAppFree')
    } else {
      api.render('./templates/demoAppPro')
    }
  }

  // extending existing files
  if (options.mode === 'Existing app') {
    if (options.version === 'Free') {
      api.injectImports(api.entryFile, `import 'bootstrap-css-only/css/bootstrap.min.css'`)
      api.injectImports(api.entryFile, `import 'mdbvue/build/css/mdb.css'`)
    } else {
      api.injectImports(api.entryFile, `import 'bootstrap-css-only/css/bootstrap.min.css'`)
      api.injectImports(api.entryFile, `import 'mdbvue/build/css/mdb.css'`)
      api.injectImports(api.entryFile, `import { Notify } from 'mdbvue'`)
 
      api.onCreateComplete(() => {
        const { EOL } = require('os')
        const contentMain = fs.readFileSync(api.entryFile, { encoding: 'utf-8' })
        const lines = contentMain.split(/\r?\n/g)

        // check existing imports
        const notifyIndex = lines.findIndex(line => line.match(/Vue.use(\(Notify)\)/))

        // update main.js if needed
        if (notifyIndex < 0) {
          const renderIndex = lines.findIndex(line => line.match(/new Vue/))
          lines[renderIndex - 1] += `${EOL}Vue.use(Notify)`
          lines[renderIndex - 1] += `${EOL}`
          fs.writeFileSync(api.entryFile, lines.join(EOL), { encoding: 'utf-8' })
        }
      })
      api.render('./templates/existingAppPro')
    }
  }

  api.render('./config')

  // npm pack & replace dependency by tgz
  if (options.version === 'Pro') {
    api.onCreateComplete(() => {
      const packlist = require('npm-packlist')
      const tar = require('tar')
      const packageDir = './node_modules/mdbvue'
      const packageTarball = `./mdb/mdbvue/mdbvue-v${latestTag}.tgz`
      
      packlist({ path: packageDir })
        .then(files => tar.create({
          prefix: 'package/',
          cwd: packageDir,
          file: packageTarball,
          gzip: true
        }, files))
        .then(() => {
          const replace = require('replace-in-file');
          const replaceOptions = {
            files: './package.json',
            from: `git+https://oauth2:${options.token}@git.mdbootstrap.com/mdb/vue/vu-pro.git`,
            to: `./mdb/mdbvue/mdbvue-v${latestTag}.tgz`,
          };
          try {
            replace.sync(replaceOptions);
          }
          catch (error) {}
        })
        exec('yarn');
    })
  }

  api.onCreateComplete(() => {
    console.log('\x1b[32m%s\x1b[0m', 'MDB is ready for coding!')
  })

}