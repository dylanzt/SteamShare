const express = require('express');
const next = require('next');
require('isomorphic-fetch');
const steamAPI = require('./lib/steamAPI');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare()
.then(() => {
  const server = express();

  server.get('/fetchFromSteamApi', (req, res) => {
    const method = steamAPI[req.query.method];
    if (method) {
      method(req.query.argument).then((data) => {
        res.json(data);
      });
    } else {
      res.send(`''${req.query.method}' is not supported`);
    }
  });

  server.get('*', (req, res) => {
    return handle(req, res)
  });

  server.listen(3000, (err) => {
    if (err) throw err
    console.log('> Ready on http://localhost:3000')
  });
});
