import express from 'express'
import http from 'http'
import routes from './server/routes'

const port = 3000
const app = express()
const server = http.createServer(app)

app.use(express.static(__dirname + '/public'))
app.use('/', routes)
server.listen(port, () => {
  console.log('paint market live on port %s', port)
})

export default app
