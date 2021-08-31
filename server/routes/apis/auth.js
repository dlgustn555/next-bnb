const Router = require('koa-router')
const authService = require('../../services/auth')

const router = new Router()

router.post('/signup', async (ctx) => {
  ctx.body = await authService.addUser(ctx.request.body)
})

module.exports = router
