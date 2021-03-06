let express = require('express'),
    index = require('./routes/index'),
    users = require('./routes/users'),
    questions = require('./routes/questions'),
    monggo = require('mongoose'),
    bodyPars = require('body-parser'),
    cors = require('cors'),
    port = process.env.PORT || 8000,
    app = express()
app.use(cors());
app.use(bodyPars.json())
app.use(bodyPars.urlencoded({extended:false}))


app.use('/',index);
app.use('/users',users);
app.use('/questions',questions);

// monggo.connect('mongodb://localhost/hackoverflow')
monggo.connect(`mongodb://${process.env.DB_USER}:${process.env.DB_PASS}@ds163020.mlab.com:63020/backend-hacktivoverflow`)
monggo.connection.on('connected', function() {
  console.log('mongo connected');
})
app.listen(port, function() {
  console.log('server is running...');
})