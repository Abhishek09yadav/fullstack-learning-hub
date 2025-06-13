import express from 'express';
import userRoutes from './routes/userRoutes.js'
import { LoggingMiddleWare } from './middleware/loggingMiddleware.js';
import { finduserIndex } from './middleware/findUserIndex.js';

const app = express();
const port = 4000

app.use(express.json());
app.use('/api',finduserIndex,userRoutes)
app.get('/', LoggingMiddleWare,(req,res)=>{
  res.status(200).send({messge:"hello"})
})


app.listen(port, () => {console.log(`Server is running on http://localhost:${port}`)})