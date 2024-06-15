const fs = require('node:fs')
const Koa = require('koa')
const KoaRouter = require('@koa/router')

const app = new Koa()

const router = new KoaRouter()

router.get('/images/:image', async ctx => {
  const image = await fs.promises.readFile(`images/${ctx.params.image}`)
  ctx.type = 'image/jpeg'
  ctx.body = image
})

app.use(router.routes())

app.listen(8080, () => console.log('Server has been started'))
