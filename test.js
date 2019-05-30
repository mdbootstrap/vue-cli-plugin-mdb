const remoteGitTags = require('remote-git-tags')
const repoPath = 'github.com/mdbootstrap/Vue-Bootstrap-with-Material-Design'
let latestTag

remoteGitTags(repoPath).then(tags => {
  latestTag = Array.from(tags)[tags.size - 1][0]
}).then(() => {
  console.log(latestTag)
})
