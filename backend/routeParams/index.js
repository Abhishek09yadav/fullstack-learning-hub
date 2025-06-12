import express from 'express';
import userRoutes from './routes/userRoutes.js'
const app = express();
const port = 4000
app.use(express.json());
app.use('/api',userRoutes)
app.get('/', (req,res)=>{
  res.status(200).send({messge:"hello"})
})


app.listen(port, () => {console.log(`Server is running on http://localhost:${port}`)})