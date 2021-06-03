const fs = require('fs')

function parseBibToJSON(file) {
  const bibtexParse = require('bibtex-parse')
  const bibtex = fs.readFileSync(file, 'utf8')
  var js = bibtexParse.entries(bibtex)
  return js
}

function saveAsJSON(file) {
  fs.writeFileSync('tdd-data.json', JSON.stringify(parseBibToJSON(file)))
}
