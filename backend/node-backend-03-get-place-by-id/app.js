const  bodyParser =  require('body-parser');
const express = require('express')
const placesRoutes =require('./routes/places-routes');
const userRoutes =  require('./routes/users-routes');

const app = express();
app.use(bodyParser.json());
app.use('/users',userRoutes)

app.use('/api/places', placesRoutes); // => /api/places...
// error handling using middleware function
app.use((error,req,res,next)=>{
    if(res.headerSent){
        return next(error);
    }
    res.status(error.code || 500)
    res.json({message: error.message || 'an unexpected error occured'})
})
app.listen(5000);