const express = require('express');
const helmet = require('helmet');

const actionRouter = require('../routers/action-router');
const projectRouter = require('../routers/project-router');

const server = express();

server.use(helmet());
server.use(express.json());

server.use('/api/action', actionRouter);
server.use('/api/project', projectRouter);

// sanity check route
server.get('/', (req, res) => {
  res.status(200).json({ hello: 'World!' });
});

module.exports = server;
