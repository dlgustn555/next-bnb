const Router = require('koa-router')

const router = new Router()

router.get('/signup', (ctx) => {
  ctx.body = 'SINGUP'
})

module.exports = router
