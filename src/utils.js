const path = require('path')
const fs = require('fs/promises')
const XLSX = require('xlsx')
const _ = require('lodash')
const {nanoid} = require('nanoid')

// ;(async ()=>{
//   for (let folder of await fs.readdir('./assets', {withFileTypes: true})) {
//     if (folder.isDirectory()) {
//       let fileList = await fs.readdir(path.resolve('./assets', folder.name))
//       fileList = fileList.filter(p=>p != 'list.json')
//       await fs.writeFile(path.resolve('./assets', folder.name, './list.json'), JSON.stringify(fileList, null, '  '))
//     }
//   }
// })()

;(async ()=>{
  let workbook = XLSX.readFile("../data.xlsx")
  let skillList = XLSX.utils.sheet_to_json(workbook.Sheets["skill"])
  _.forIn(skillList, skill=>{
    skill.nodes = _.split(skill.nodes, '|')
                  .map(n=>_.zipObject(['icon', 'x', 'y'], _.split(n, '-')))
                  .map(n=>{
                    n.icon = n.icon + '.png'
                    n.id = nanoid(8)
                    return n
                  })
  })
  await fs.writeFile('./assets/skillList.json', JSON.stringify(skillList, null, "  "))
  let eventList = XLSX.utils.sheet_to_json(workbook.Sheets['event'])
  _.forIn(eventList, event=>{
    if (event.icon) event.icon = event.icon + '.png'
    event.baseToken = _.split(event.baseToken, ',')
  })
  await fs.writeFile('./assets/eventList.json', JSON.stringify(eventList, null, "  "))
})()