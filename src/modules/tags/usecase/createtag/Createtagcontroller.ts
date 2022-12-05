import { Request, Response } from "express";
import { container } from "tsyringe";
import { Createtagusecase } from "./Createtagusecase";

class Createtagcontroller{
    async handle(request:Request, response:Response){
        const{body} = request
        const createtagusecase = container.resolve(Createtagusecase)
        const tag = await createtagusecase.execute(body)
        return response.json(tag)
    }
}
export {Createtagcontroller}