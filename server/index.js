const Koa = require('koa')
const bodyParser = require('koa-bodyparser')

const app = new Koa()

app.use(bodyParser())

app.listen(8001, () => {
  console.log('Listening on PORT: 8001')
})
