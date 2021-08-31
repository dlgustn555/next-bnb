const Router = require('koa-router')
const apiRoutes = require('./apis')

const router = new Router()

// API 를 담당하는 라우트
router.use('/api', apiRoutes.routes())

module.exports = router
