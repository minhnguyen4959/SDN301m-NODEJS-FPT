import express from "express";
import * as dotenv from "dotenv";
import {productRouter} from './routes/index.js';

const app = express();

//use file .evn by method config()
dotenv.config();
const port = process.env.PORT || 8080;

// console.log(process.env)
app.use('/products', productRouter)



app.listen(port, async () => {
    console.log(`ok ${port}`);
});