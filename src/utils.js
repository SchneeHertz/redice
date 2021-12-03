import path from 'path'
import fs from 'fs/promises'
import XLSX from 'xlsx'

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
  let mutationList = XLSX.utils.sheet_to_json(workbook.Sheets["Sheet1"])
  await fs.writeFile('./assets/mutationList.json', JSON.stringify(mutationList, null, "  "))
  let eventList = XLSX.utils.sheet_to_json(workbook.Sheets['Sheet2'])
  await fs.writeFile('./assets/eventList.json', JSON.stringify(eventList, null, "  "))
})()