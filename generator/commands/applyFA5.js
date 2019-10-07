const fs = require('fs-extra')
const { EOL } = require('os')

const applyFA5 = entry => {
  const contentMain = fs.readFileSync(entry, { encoding: 'utf-8' })
  const lines = contentMain.split(/\r?\n/g)

  // check existing imports & apply if needed
  if (lines.findIndex(line => line.match(/fortawesome/)) < 0) {
    lines.unshift(`import '@fortawesome/fontawesome-free/css/all.min.css'`)
  }

  fs.writeFileSync(entry, lines.join(EOL), { encoding: 'utf-8' })
}

module.exports = applyFA5