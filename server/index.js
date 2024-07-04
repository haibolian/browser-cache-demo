var Koa = require('koa');
var app = new Koa();
var Router = require('koa-router');
const fs = require('fs')
const router = new Router;
router.get("/", async (ctx) => {
  console.log('getting');
  ctx.set('Cache-Control', 'max-age=5');
  // 设置强缓存 10秒
  ctx.set('Cache-Contrwol', 'max-age=5')
  ctx.body = 'ok';
})
app
  .use(router.routes())   	//启动路由
app.listen(3000);
