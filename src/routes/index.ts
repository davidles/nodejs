/**
 * Root Router
 * Redirections to Routers
 */

import express, { Request, Response } from 'express';
import helloRouter from './HelloRouter';
import { LogInfo } from '../utils/logger';
import goodbye from './Goodbye';

// Server instance
let server = express();

// Router instance
let rootRouter = express.Router();

// Activate for request to http://localhost:8000/api
rootRouter.get('/', (req: Request, res: Response) => {
    LogInfo('GET: localhost:8000/api')
    res.send("Welcome to my app")
})

// Redirections to Routers & Controllers
server.use('/', rootRouter); // http://localhost:8000/api
server.use('/hello', helloRouter) // http://localhost:8000/api/hello
server.use('/goodbye', goodbye);

// Add mores routes to the app

export default server;