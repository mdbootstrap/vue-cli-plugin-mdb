const fs = require('fs-extra')
const { EOL } = require('os')

const appFileUpdate = () => {
  const contentApp = fs.readFileSync('./src/App.vue', { encoding: 'utf-8' })
  const lines = contentApp.split(/\r?\n/g)

  const styleIndex = lines.findIndex(line => line.match(/<style/))

  if (lines.findIndex(line => line.match(/family=Roboto/)) < 0) {
    lines[styleIndex] += `${EOL}@import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap');`
    lines[styleIndex] += `${EOL}`
  }

  fs.writeFileSync('./src/App.vue', lines.join(EOL), { encoding: 'utf-8' })
}

module.exports = appFileUpdate