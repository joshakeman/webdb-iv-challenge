const express = require('express');
const helmet = require('helmet');

const dishRouter = require('../routes/dishes_router');
const recipeRouter = require('../routes/recipes-router');

const server = express();

server.use(helmet());
server.use(express.json());

server.use('/api/dishes', dishRouter);
server.use('/api/recipes', recipeRouter);

// sanity check route
server.get('/', (req, res) => {
  res.status(200).json({ hello: 'World!' });
});

module.exports = server;