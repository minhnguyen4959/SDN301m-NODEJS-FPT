import express from "express";
import * as dotenv from "dotenv";
import {productRouter} from './routes/index.js';
import connectDB from "./database.js";
import cors from "cors"


const app = express();

//use file .evn by method config()
dotenv.config();
const port = process.env.PORT || 8080;

//middleware bổ sung 
app.use(express.json());

//cors is middleware allow access router FE -> BE
app.use(cors());

app.use('/products', productRouter)




app.listen(port, async () => {
    connectDB();
    console.log(`ok ${port}`);
});

