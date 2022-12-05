import express, { Express, Request, Response } from "express";
import dotenv from 'dotenv';

// Configuration the .env file
dotenv.config();

// Create Express APP
const app: Express = express();
// const port: string | number = process.env.PORT=> Error
const port: string | number = 8000;


// Define the first Route of APP
app.get('/', (req: Request, res: Response) =>{
    res.send("Welcome to APP Express + TS + Swagger + Mongoose + Node js + Jest")
});

app.get('/hello', (req: Request, res: Response) =>{
    res.send("Hello world");
});

app.listen( port, () =>{
    console.log(`Listen port: ${port}`);
})


