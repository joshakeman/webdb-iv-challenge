const express = require('express');
const helmet = require('helmet');

const dishRouter = require('../routes/dishes_router');

const server = express();

server.use(helmet());
server.use(express.json());

server.use('/api/dishes', dishRouter);

// sanity check route
server.get('/', (req, res) => {
  res.status(200).json({ hello: 'World!' });
});

module.exports = server;