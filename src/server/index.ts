import express, { Express, Request, Response } from "express";

// Enviroment Variables
import dotenv from 'dotenv';

// Security
import cors from 'cors';
import helmet from "helmet";

// TODO HTTPS

// Root routes
import rootRouter from '../routes';


// Create Express APP
const server: Express = express();

// Define SERVER to use /api and execute rooRouter 'indes.ts' in routes
// From this point anover: http://localhost:8000/api/
server.use(
    '/api', 
    rootRouter
)

// TODO Mongoose Collection


// Security Config
server.use(helmet());
server.use(cors());

// Content Type Config
server.use(express.urlencoded({ extended: true, limit: '50mb' }))
server.use(express.json({ limit: '50mb'}))

// * Redirections
server.get('/', (req: Request, res: Response) => {
    res.redirect('/api');
})

export default server;