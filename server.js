const express = require('express'); // Requiring/Importing modules
const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// Bodyparser Middleware
app.use(morgan('dev'));
app.use(bodyParser.json());

app.use(cors());

// DB Config
const db = require('./config/keys').mongoURI;

// Connect to MongoDB
mongoose
    .connect(db)
    .then( () => console.log( 'MongoDB Connected..') )
    .catch(err => console.log( err ) )

// Use Routes
app.use('/util', require('./routes/api/userutil'));
app.use('/article', require('./routes/api/articlesutil'));


const port = process.env.PORT || 5000;

app.listen( port, () => console.log('Server started on port ${port}') );