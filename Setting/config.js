// Module
const fs = require('fs')

global.connect = true
global.publicX = true 
global.owner = ['6288983398947'] 
global.prefa = ['','!','.',',','🐤','🗿']

global.egg = "15" // Egg ID
global.nestid = "5" // nest ID
global.loc = "1" // Location ID
global.domain = "-" // Domain
global.apikey = "-" //ptla
global.capikey = "-" //ptlc

let file = require.resolve(__filename)
require('fs').watchFile(file, () => {
  require('fs').unwatchFile(file)
  console.log('\x1b[0;32m'+__filename+' \x1b[1;32mupdated!\x1b[0m')
  delete require.cache[file]
  require(file)
})