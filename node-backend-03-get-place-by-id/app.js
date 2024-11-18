const  bodyParser =  require('body-parser');
const express = require('express')
const placesRoutes =require('./routes/places-routes');
const userRoutes =  require('./routes/users-routes');

const app = express();
app.use(bodyParser.json());
app.use('/users',userRoutes)

app.use('/api/places', placesRoutes); // => /api/places...

app.listen(5000);