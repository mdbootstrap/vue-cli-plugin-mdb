const gitTagsRemote = require('git-tags-remote')
const repoPath = 'https://github.com/mdbootstrap/Vue-Bootstrap-with-Material-Design.git'
let latestTag = '5.4.0'

gitTagsRemote.get(repoPath).then(tags => {
  latestTag = Array.from(tags)[0][0]
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

  if (options.defaultApp === 'Default') {
    api.render('./templates/default')
  } else {
    if (options.version === 'Free') {
      api.render('./templates/demoFree')
    } else {
      api.render('./templates/demoPro')
    }
  }

  api.render('./config')

}