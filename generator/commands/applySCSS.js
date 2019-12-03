const fs = require('fs-extra')

const applySCSS = version => {
  fs.copy('./node_modules/mdbvue/lib/scss', './mdb/mdbvue/scss', err => {
    if (err) throw err
  })
  fs.copy('./node_modules/mdbvue/lib/img', './mdb/mdbvue/img', err => {
    if (err) throw err
  })

  const { EOL } = require('os')
  const contentApp = fs.readFileSync('./src/App.vue', { encoding: 'utf-8' })
  const lines = contentApp.split(/\r?\n/g)

  const styleIndex = lines.findIndex(line => line.match(/<style/))

  if (lines.findIndex(line => line.match(/mdbvue/)) < 0) {
    lines[styleIndex] = '<style lang="scss">'
    lines[styleIndex] += `${EOL}$image-path: '~@/../mdb/mdbvue/img';`
    if (version === 'Pro') {
      lines[styleIndex] += `${EOL}@import '~@/../mdb/mdbvue/scss/mdb-pro.scss';`
    } else {
      lines[styleIndex] += `${EOL}@import '~@/../mdb/mdbvue/scss/mdb-free.scss';`
    }
    lines[styleIndex] += `${EOL}`
    fs.writeFileSync('./src/App.vue', lines.join(EOL), { encoding: 'utf-8' })
  }
}

module.exports = applySCSS