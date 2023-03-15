let express = require('express');
let mongoose = require('mongoose');
let cors = require('cors');
let bodyParser = require('body-parser');
// Express Route
const studentRoute = require('./routes/student.route')

const app=express();
const port = process.env.PORT || 4000;

//middle ware needed to parse json body 

app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.json())
app.use(cors())
app.use('/api/students', studentRoute)


// })
// db config 
const connection = 'mongodb://mongo';

mongoose.connect(connection, {
 
    useNewUrlParser: true,
    // useCreateIndex: true,
    useUnifiedTopology: true
 
}).then(() => {
    console.log('successfully connected to the database');



}).catch(err => {
    console.log('error connecting to the database');
    console.log(err)
    process.exit();
});

// run initially to populate database which is mounted locally 
// record = json object 

app.get('/api', (req,res) => {
    console.log('connecting to route route "/"')
    res.status(200).send('MERN Stack')
})


// PORT
const server = app.listen(port, () => {
  console.log('Connected to port ' + port)
})
// 404 Error
app.use((req, res, next) => {
  next(createError(404));
});
app.use(function (err, req, res, next) {
  console.error(err.message);
  if (!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).send(err.message);
});


