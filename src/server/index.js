import React from 'react'
import ReactDOMServer from 'react-dom/server'
import ServerRouter from './ServerRouter.react'
import express from 'express'
const app = express()

app.get('*', function (request, response) {
  var html = ReactDOMServer.renderToString(
    <ServerRouter url={request.url} />
  )
  response.send(html)
})

var PORT = 3000
app.listen(PORT, function () {
  console.log('http://localhost:' + PORT)
})
