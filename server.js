const express = require("express")
const mongoose = require('mongoose')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const cors = require('cors');
require('dotenv').config()

//app
const app = express()

//db
mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: true
})
    .then(() => console.log("db connected"))
    .catch(err => console.log(err.message));

//middleware
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cors);

//route
app.get('/api', (req, res) => {
    res.json({
        data: 'node api'
    });
});

//port
const port = process.env.PORT || 8000;
app.listen(port, () => console.log("server is running at port " + port));
