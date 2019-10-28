const { EOL } = require('os')
const fs = require('fs-extra')

const updateMainJS = (entry, version, styling) => {
  const contentMain = fs.readFileSync(entry, { encoding: 'utf-8' })
  const lines = contentMain.split(/\r?\n/g)

  // check existing imports & apply if needed
  if (lines.findIndex(line => line.match(/mdbvue/)) < 0) {
    if (styling === 'Editable in your project (SCSS)') {
      lines.unshift(`import 'mdbvue/lib/mdbvue.css'`)
    } else {
      lines.unshift(`import 'mdbvue/lib/css/mdb.min.css'`)
    }
    lines.unshift(`import 'bootstrap-css-only/css/bootstrap.min.css'`)
  }

  if (version === 'Pro') {
    // check existing imports & update if needed
    if (lines.findIndex(line => line.match(/Vue.use(\(Notify)\)/)) < 0) {
      const renderIndex = lines.findIndex(line => line.match(/new Vue/))
      lines[renderIndex - 1] += `${EOL}import Notify from 'mdbvue/lib/components/Notify'`
      lines[renderIndex - 1] += `${EOL}Vue.use(Notify)`
      lines[renderIndex - 1] += `${EOL}`
    }
  }

  fs.writeFileSync(entry, lines.join(EOL), { encoding: 'utf-8' })
}

module.exports = updateMainJS