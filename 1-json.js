const fs = require('fs')

// const book = {
//   title:'Gone with the wind',
//   author: 'Margaret Mitchell'
// }
// const bookJSON = JSON.stringify(book)
// fs.writeFileSync('1-json.json', bookJSON)


const dataBuffer = fs.readFileSync('1-json.json')
const dataJSON = dataBuffer.toString()
const data = JSON.parse(dataJSON)

console.log(dataBuffer)
// console.log(data.title)

