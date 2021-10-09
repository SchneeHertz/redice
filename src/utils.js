import path from 'path'
import fs from 'fs/promises'

;(async ()=>{
  for (let folder of await fs.readdir('./assets', {withFileTypes: true})) {
    if (folder.isDirectory()) {
      let fileList = await fs.readdir(path.resolve('./assets', folder.name))
      fileList = fileList.filter(p=>p != 'list.json')
      await fs.writeFile(path.resolve('./assets', folder.name, './list.json'), JSON.stringify(fileList, null, '  '))
    }
  }
})()
