require('dotenv').config();

const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');

const app = express();

connectDB();

app.use(cors());
app.use(express.json());

app.use('/api/newRoute', require('./routes/newRoutes'));

app.listen(process.env.PORT || 3000, () => console.log(`Server Running on port ${process.env.PORT || 3000}`));