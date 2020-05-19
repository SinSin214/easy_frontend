const express = require('express')
const cors = require('cors');
const app = express()
const mongoose = require('mongoose')
const account = require('./routes/account/account');
let Task = require('./model/Task');

const mongoURL = 'mongodb+srv://tranhuynhkha:2141996a@cluster0-pkm38.mongodb.net/test?retryWrites=true&w=majority';

app.use(cors());

app.get('/', (req, res) => {
    res.send('hello from server2!')
})
app.use('/account', account);

mongoose.connect(mongoURL);
mongoose.Promise = global.Promise;
let db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

db.once('open', function () {
    console.log('Connected!');
    app.listen(5000, () => {
        console.log('Server is up and running on port numner 5000');

    });
});

