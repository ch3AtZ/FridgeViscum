import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { RecipeFetch } from './recipes.js'

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/recipe', RecipeFetch)

const PORT = 5000 ;
app.listen(PORT , ()=>{
    console.log('server running on port 5000')
})