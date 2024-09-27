const jsonServer = require('json-server')

const movieServer = jsonServer.create()

const router = jsonServer.router('movieBase.json')

const middleware = jsonServer.defaults()

movieServer.use(middleware)
movieServer.use(router)

const PORT = 4001

movieServer.listen(PORT,()=>{
    console.log(`movie base server running of PORT ${PORT}`)
})