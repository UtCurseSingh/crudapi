const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./database/connection');
const bodyparser = require('body-parser');

dotenv.config( { path: './config/config.env'});

const app = express();


app.use(express.json());

const PORT = 3000;

//db connection
connectDB();

//loading router
app.use('/', require('./router/router'));

app.listen( PORT, () => {
    console.log(`Server started at: ${PORT}....`);
});

