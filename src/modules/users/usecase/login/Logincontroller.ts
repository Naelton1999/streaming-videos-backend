import { Request, Response } from "express";
import { container } from "tsyringe";
import { Authenticateduserusecase } from "./Loginusecase";



class Authenticatedusercontroller{
    async handle(request:Request, response:Response){
        const{body}= request;
        const authenticateduserusecase= container.resolve(Authenticateduserusecase)
        const token= await authenticateduserusecase.execute(body)
        return response.json(token)
    }
}
export {Authenticatedusercontroller}