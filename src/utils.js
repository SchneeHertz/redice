const path = require('path')
const fs = require('fs/promises')
const XLSX = require('xlsx')
const _ = require('lodash')
const {nanoid} = require('nanoid')

;(async ()=>{
  let fileList = await fs.readdir('../data')
  await fs.rmdir('../public/data', {recursive: true})
  await fs.mkdir('../public/data')
  let scriptList = []
  for (file of fileList.filter(n=>!n.includes('~$'))) {
    let workbook = XLSX.readFile(path.resolve(__dirname, '../data', file))
    let paramData = XLSX.utils.sheet_to_json(workbook.Sheets['param'])
    let status = _.assign({}, ..._(paramData).map(e=>(e.status?{[e.status]: e.initValue}:{})).value())
    let backpack = _.assign({}, ..._(paramData).map(e=>(e.backpack?{[e.backpack]: []}:{})).value())
    let column = _.get(paramData[0], 'column')
    let name = _.get(paramData[0], 'name')
    let filename = _.get(paramData[0], 'filename') + '_' + nanoid(3)
    let description = _.get(paramData[0], 'description')
    let itemList = XLSX.utils.sheet_to_json(workbook.Sheets['item'])
    _.forIn(itemList, item=>{
      item.nodes = _.split(item.nodes, '|')
                    .map(n=>_.zipObject(['icon', 'x', 'y'], _.split(n, '-')))
                    .map(n=>{
                      n.icon = n.icon + '.png'
                      n.id = nanoid(8)
                      return n
                    })
      item.eventEffect = JSON.parse(item.eventEffect)
      item.status
    })
    let eventList = XLSX.utils.sheet_to_json(workbook.Sheets['event'])
    _.forIn(eventList, event=>{
      if (event.icon) event.icon = event.icon + '.png'
      event.baseToken = _(event.baseToken).split(',').compact().value()
      event.statusEffect = JSON.parse(event.statusEffect || '{}')
      event.eventEffect = JSON.parse(event.eventEffect || '{}')
      event.item = JSON.parse(event.item || '{}')
      event.optionList = JSON.parse(event.optionList || '[]')
    })
    let id = nanoid()
    scriptList.push({
      id,
      name,
      description,
      filename
    })
    await fs.writeFile(`../public/data/${filename}.json`, JSON.stringify({
      id,
      name,
      description,
      status,
      backpack,
      column,
      itemList,
      eventList
    }, null, "  "))
  }
  await fs.writeFile('./assets/scriptData.json', JSON.stringify(scriptList, null, "  "))
})()