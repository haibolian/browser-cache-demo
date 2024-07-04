var Koa = require('koa');
var app = new Koa();
var Router = require('koa-router');
const fs = require('fs')
const router = new Router;

router.get('/', ctx => {
  ctx.body = 'Hello World'
})

router.get("/cache/expires", async (ctx) => {
  console.log('getting');
  const date = new Date('2024-7-10');
  ctx.set('expires', date.toUTCString());
  ctx.body = 'ok';
})

router.get("/cache/strong", async (ctx) => {
  console.log('getting');
  ctx.set('Cache-Control', 'max-age=10');
  ctx.body = 'ok';
})

let count = 0;
setInterval(() => {
  count++
}, 10000);

router.get("/cache/etag", async (ctx) => {
  let etag = 'about' + count
  if (ctx.header['if-none-match'] === etag) {
    ctx.status = 304;
  } else {
    ctx.set('ETag', etag)
    ctx.body = 'about';
  }
})

router.get('/cache/since', (ctx) => {
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
