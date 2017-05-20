const express = require('express')
var stylus = require('stylus')
var path = require('path')
var publicDir = path.join(__dirname, 'public')
var staticDir = path.join(publicDir, 'static')

const app = express();

app.use(stylus.middleware({
  src: path.join(__dirname, 'resources'),
  dest: path.join(staticDir),
  debug: true,
  force: true
}))
app.use('/static', express.static(staticDir))

app.set('port', 8080)

app.get('/', function (request, response) {
  console.log("GET / ")
  console.log("sending " + path.join(staticDir, 'index.html'))
  console.log("publicDir " + publicDir)
  console.log("staticDir " + staticDir)
  response.sendFile(path.join(staticDir, 'index.html'))
})

app.listen(app.get('port'), function () {
  console.log("app listening on 8080")
})
