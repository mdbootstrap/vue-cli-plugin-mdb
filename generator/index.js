const updateMainJS = require('./commands/updateMainJS')
const applySCSS = require('./commands/applySCSS')
const applyRoboto = require('./commands/applyRoboto')
const applyFA5 = require('./commands/applyFA5')
const packTgz = require('./commands/pack')

const gitTagsRemote = require('git-tags-remote')

// check for the latest mdb version
let latestTag = '6.2.0'
gitTagsRemote.latest('https://github.com/mdbootstrap/Vue-Bootstrap-with-Material-Design.git').then(tags => {
  latestTag = Array.from(tags)[0]
})

module.exports = (api, options) => {

  if (api.hasPlugin('mdbvue')) {
    api.exitLog('Please type `npm uninstall mdbvue` or `yarn remove mdbvue` to remove old MDB package and run plugin again', 'warn')
  } else {

    // render new files
    if (options.mode === 'New app') {
      api.render('./templates/newApp')
    }

    // extend existing config & update main.js
    if (options.version === 'Free') {

      api.extendPackage({
        scripts: {
          start: 'vue-cli-service serve --open'
        },
        dependencies: {
          'mdbvue': latestTag
        }
      })

      api.onCreateComplete(() => {
        updateMainJS(api.entryFile, options.version, options.styling)
      })

    } else if (options.version === 'Basic') {

      api.extendPackage({
        scripts: {
          start: 'vue-cli-service serve --open'
        },
        dependencies: {
          'mdbvue': `./mdb/mdbvue/mdbvue-${latestTag}.tgz`
        }
      })

      api.onCreateComplete(() => {
        updateMainJS(api.entryFile, options.version, options.styling)
      })

    } else {

      api.extendPackage({
        scripts: {
          start: 'vue-cli-service serve --open'
        },
        dependencies: {
          'mdbvue': `git+https://oauth2:${options.token}@git.mdbootstrap.com/mdb/vue/vu-pro.git`
        }
      })

      api.onCreateComplete(() => {
        updateMainJS(api.entryFile, options.version, options.styling)
      })
      api.render('./templates/existingAppPro')
    }

    // apply SCSS config
    if (options.styling === 'Editable in your project (SCSS)') {
      api.extendPackage({
        devDependencies: {
          'node-sass': '^4.9.0',
          'sass-loader': '^8.0.0'
        }
      })
      api.onCreateComplete(() => {
        applySCSS(options.version)
      })
    }

    // apply Roboto font
    if (options.roboto === true) {
      api.onCreateComplete(() => {
        applyRoboto()
      })
    }

    // apply Font Awesome
    if (options.fa5 === true) {
      api.onCreateComplete(() => {
        applyFA5(api.entryFile)
      })
    }

    // npm pack & replace dependency by tgz
    if (options.version === 'Pro') {
      api.onCreateComplete(() => {
        packTgz(latestTag, options.token)
      })
    }

    api.exitLog('MDB is ready for coding!', 'done')
  }
}