import express from 'express'
import bodyParser from 'body-parser'
import webpack from 'webpack'
import wdm from 'webpack-dev-middleware'
import whm from 'webpack-hot-middleware'

const app = express()

if (process.env.NODE_ENV !== 'production') {
  const config = require('./webpack.config')
  const compiler = webpack(config)

  app.use(wdm(compiler, { noInfo: true, publicPath: config.output.publicPath }))
  app.use(whm(compiler))
}

app.use(express.static(`${__dirname}/dist`))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.get('/*', (req, res) => res.sendFile(__dirname + '/dist/index.html'))

app.listen(process.env.PORT || 5000)