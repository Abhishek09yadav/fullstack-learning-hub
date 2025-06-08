import express from 'express';
import userRoutes from './routes/userRoutes.js'
const app = express();
const port = 4000
app.use('/api',userRoutes)



app.listen(port, () => {console.log(`Server is running on http://localhost:${port}`)})