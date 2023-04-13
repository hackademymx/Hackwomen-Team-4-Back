const { PORT } = require('./config/config');
const { db } = require('./config/database');
const express = require('express');

const server = express();

db.authenticate().then(() => { 
  server.listen(PORT, () => {
    console.log('Server is running on port ${PORT}');
  });
});
