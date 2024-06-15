const fs = require('node:fs')
const fastify = require('fastify')

const app = fastify()

app.get('/images/:image', async (req, reply) => {
  const image = await fs.promises.readFile(`images/${req.params.image}`)
  reply.type('image/jpeg')
  reply.send(image)
})

app.listen({ port: 8080 }, () => console.log('Server has been started'))
