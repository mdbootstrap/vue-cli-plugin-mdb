const fs = require('fs-extra')

// check for the latest mdb version
const gitTagsRemote = require('git-tags-remote')
const repoPath = 'https://github.com/mdbootstrap/Vue-Bootstrap-with-Material-Design.git'
let latestTag = '5.8.3'

gitTagsRemote.latest(repoPath).then(tags => {
  latestTag = Array.from(tags)[0]
})

module.exports = (api, options) => {
  // warning if mdb is already installed
  if (api.hasPlugin('mdbvue')) {
    api.exitLog('Please type `npm uninstall mdbvue` or `yarn remove mdbvue` to remove old MDB package and run plugin again', 'warn')
  } else {

    if (options.version === 'Free') {
      api.extendPackage({
        scripts: {
          start: 'vue-cli-service serve --open'
        },
        dependencies: {
          'mdbvue': latestTag
        }
      })

    } else {

      api.extendPackage({
        scripts: {
          start: 'vue-cli-service serve --open'
        },
        dependencies: {
          'mdbvue': `git+https://oauth2:${options.token}@git.mdbootstrap.com/mdb/vue/mdb-vue-dev.git`
        }
      })

    }

    // rendering new files & eslint rules update
    if (options.mode === 'New app') {
      api.render('./templates/newApp')
    } else if (options.mode === 'Demo') {
      if (options.version === 'Free') {
        api.render('./templates/demoAppFree')
      } else {
        api.render('./templates/demoAppPro')
      }
      api.extendPackage({
        eslintConfig: {
          "rules": {
            "no-console": 0
          }
        }
      })
    }

    // extending existing files
    if (options.mode === 'Existing app') {
      if (options.version === 'Free') {
        api.injectImports(api.entryFile, `import 'bootstrap-css-only/css/bootstrap.min.css'`)
        api.injectImports(api.entryFile, `import 'mdbvue/lib/css/mdb.min.css'`)
      } else {
        api.injectImports(api.entryFile, `import 'bootstrap-css-only/css/bootstrap.min.css'`)
        api.injectImports(api.entryFile, `import 'mdbvue/lib/css/mdb.min.css'`)
        api.injectImports(api.entryFile, `import Notify from 'mdbvue/lib/components/Notify'`)
  
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

    // npm pack & replace dependency by tgz
    if (options.version === 'Pro') {
      api.onCreateComplete(() => {

        // editable SCSS option
        if (options.styling === 'Editable in your project (SCSS)') {
          fs.copy('./node_modules/mdbvue/lib/scss', './mdb/mdbvue/scss', err => {
            if (err) throw err
          })
          fs.copy('./node_modules/mdbvue/lib/img', './mdb/mdbvue/img', err => {
            if (err) throw err
          })
        }

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
              from: `git+https://oauth2:${options.token}@git.mdbootstrap.com/mdb/vue/mdb-vue-dev.git`,
              to: `./mdb/mdbvue/mdbvue-v${latestTag}.tgz`,
            };
            try {
              replace.sync(replaceOptions);
            }
            catch (error) {}
          })
      })
    }

    api.exitLog('MDB is ready for coding!', 'done')
  }
}