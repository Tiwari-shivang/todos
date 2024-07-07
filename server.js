const express = require('express');
const db = require('./src/config/dbConnect');
const router = require('./src/routes');
const app = express();

app.use(express.json())
app.use('/api', router);
db.dbConnect(app);