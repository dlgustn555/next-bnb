const Koa = require('koa')
const bodyParser = require('koa-bodyparser')
const cors = require('cors')

const routes = require('./routes')
const mongodb = require('./mongodb')

mongodb.connect()

const app = new Koa()

app.use(bodyParser())
app.use(routes.routes())
app.use(cors())

app.listen(8001, () => {
  console.log('Listening on PORT: 8001')
})
