var Koa = require('koa');
var app = new Koa();
var Router = require('koa-router');
const fs = require('fs')
const router = new Router;

router.get("/", async (ctx) => {
  console.log('getting');
  ctx.set('Cache-Control', 'max-age=10');
  // 设置强缓存 10秒
  ctx.set('Cache-Contrwol', 'max-age=10')
  ctx.body = 'ok';
})

let count = 0;
setInterval(() => {
  count++
}, 10000);

router.get("/about", async (ctx) => {
  let etag = 'about' + count
  if (ctx.header['if-none-match'] === etag) {
    ctx.status = 304;
  } else {
    ctx.set('ETag', etag)
    ctx.body = 'about';
  }
})

router.get('/category', (ctx) => {
  const since = ctx.get('if-modified-since')
  const sinceTime = new Date(since)
  const now = new Date();
  if (since && (now - sinceTime <= 5000)) {
    ctx.status = 304;
  } else {
    ctx.set('Last-Modified', now.toUTCString())
    ctx.body = 'category';
  }
})
app
  .use(router.routes())   	//启动路由
app.listen(3000);
