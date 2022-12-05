import { IGoodByeController } from "./Interfaces";
import { BasicResponse, CloseResponse } from "./types";


export class GoodByeController implements IGoodByeController{
    public async getMessage(name?: string): Promise<CloseResponse> {

        return {
            message: `Bye ${name || "guy!"}`,
            date: new Date()
        }
    }

 
}