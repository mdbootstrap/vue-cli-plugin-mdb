const gitTagsRemote = require('git-tags-remote')
const repoPath = 'https://github.com/mdbootstrap/Vue-Bootstrap-with-Material-Design.git'
let latestTag = '5.4.0'

gitTagsRemote.latest(repoPath).then(tags => {
  latestTag = Array.from(tags)[0]
})

module.exports = (api, options) => {

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
        'eslint-plugin-vue-libs': '^2.1.0'
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
        'eslint-plugin-vue-libs': '^2.1.0'
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
      api.injectImports(api.entryFile, `import Vue2TouchEvents from 'vue2-touch-events'`)
      api.injectImports(api.entryFile, `import LoadScript from 'vue-plugin-load-script'`)
 
      api.onCreateComplete(() => {
        const { EOL } = require('os')
        const fs = require('fs')
        const contentMain = fs.readFileSync(api.entryFile, { encoding: 'utf-8' })
        const lines = contentMain.split(/\r?\n/g)
      
        const renderIndex = lines.findIndex(line => line.match(/new Vue/))
        lines[renderIndex - 1] += `${EOL}Vue.use(Notify)`
        lines[renderIndex - 1] += `${EOL}Vue.use(Vue2TouchEvents)`
        lines[renderIndex - 1] += `${EOL}Vue.use(LoadScript)`
        lines[renderIndex - 1] += `${EOL}`
      
        fs.writeFileSync(api.entryFile, lines.join(EOL), { encoding: 'utf-8' })
      })
    }
  }

  api.render('./config')

  // npm pack & replace dependency by tgz
  if (options.version === 'Pro') {
    api.onCreateComplete(() => {
      const packlist = require('npm-packlist')
      const tar = require('tar')
      const packageDir = './node_modules/mdbvue'
      const packageTarball = `./mdbvue-v${latestTag}.tgz`
      
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
            to: `./mdbvue-v${latestTag}.tgz`,
          };
          try {
            const replaceResults = replace.sync(replaceOptions);
          }
          catch (error) {
          }
        })
    })
  }

}