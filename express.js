const fs = require('node:fs')
const express = require('express')

const app = express()

app.get('/images/:image', async (req, res, next) => {
  try {
    const image = await fs.promises.readFile(`images/${req.params.image}`)
    res.contentType('image/jpeg')
    res.send(image)
  } catch (err) {
    next(err)
  }
})

app.listen(8080, () => console.log('Server has been started'))
