const gitTagsRemote = require('git-tags-remote')
const repoPath = 'https://github.com/mdbootstrap/Vue-Bootstrap-with-Material-Design.git'
let latestTag = '5.4.0'

gitTagsRemote.get(repoPath).then(tags => {
  latestTag = Array.from(tags)[0][0]
})

module.exports = (api, options) => {
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

  if (options.defaultApp === 'Default') {
    api.render('./templates/default')
  } else {
    api.render('./templates/demo')
  }

  api.render('./config')

}