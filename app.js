const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const markdownRoutes = require('./routes/markdownroutes');
const authRoutes = require('./routes/authRoutes'); 
const { db } = require('./db/connect');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 8000;

db();

app.use(bodyParser.json());
app.use(cors());

app.use('/api/markdown', markdownRoutes);
app.use('/api/auth', authRoutes); 

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
