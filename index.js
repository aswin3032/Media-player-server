// 1 ) import json-server library

const jsonserver = require('json-server')

// 2) create server using create function 

const mediaPlayerServer = jsonserver.create()

// 3) create path for db.json file

const router = jsonserver.router('db.json')

// 4) create middleware to convert json to js
const middleware = jsonserver.defaults()

// 5) connect
mediaPlayerServer.use(middleware)  // middle ware eppalu mukalilayirikkanam

mediaPlayerServer.use(router)  

// 6) set up port for the server

const port = 5000 || process.env.PORT //  host cheyyunna timil ore port vannal automatic maran vendiyanu process.env.PORT kodukkunnath

// 7) run the server

mediaPlayerServer.listen(port,()=>{
    console.log('Media player sever running successfully');
})