import express, { Request, Response } from "express";
import { HelloController } from "@/controller/HelloControler";
import { LogInfo } from "@/utils/logger";
 
// Router from Express
let helloRouter = express.Router();

// http://localhost:8000/api/hello?name=David/
helloRouter.route('/')
    .get(async (req: Request, res: Response) => {
        // GET: http://localhost:8000/api/hello?name=David/

        //Obtein query param
        const name: any = req?.query.name;
        LogInfo(`Query Param: ${name}`);

        // Controller Instance to excute method
        const controller: HelloController = new HelloController();

        //Obtain response
        const response = await controller.getMessage(name);

        // Send to the clent response
        return res.send(response);
    
    })

export default helloRouter;

