const express = require('express')
const cors = require('cors');
const app = express()
const mongoose = require('mongoose')
const account = require('./routes/account');
const task = require('./routes/task')
const mongoURL = 'mongodb+srv://tranhuynhkha:2141996a@cluster0-pkm38.mongodb.net/test?retryWrites=true&w=majority';

app.use(cors());
app.use(express.json());                //parsing body request object
app.use(express.urlencoded());          //parsing body request object


app.get('/', (req, res) => {
    res.send('hello from server2!')
})
app.use('/account', account);
app.use('/task', task);


mongoose.connect(mongoURL);
mongoose.Promise = global.Promise;
mongoose.connection.on('error', console.error.bind(console, 'MongoDB connection error:'));
mongoose.connection.once('open', function () {
    console.log('Connected!');
    app.listen(5000, () => {
        console.log('Server is up and running on port numner 5000');

    });
});

