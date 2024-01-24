const jsonServer = require('json-server')
const server = jsonServer.create()
//doc file , ghi file
const fs = require('fs')
const path = require('path')
const filePath = path.join('db.json') //noi chuoi
const data = fs.readFileSync(filePath, "utf-8");//doc file
const db = JSON.parse(data); //chuyen du lieu json
const router = jsonServer.router(db)//router /dd/dd

const middlewares = jsonServer.defaults()

server.use(middlewares)

server.use(jsonServer.rewriter({
    '/api/*': '/$1',
    '/blog/:resource/:id/show': '/:resource/:id'
}))
server.use(router)
server.listen(8080, () => {
    console.log('JSON Server is running')
})

module.exports = server 


//node thif k sai import