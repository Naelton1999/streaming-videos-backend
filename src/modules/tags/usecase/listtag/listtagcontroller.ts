import { Request, Response } from "express";
import { container } from "tsyringe";
import { Listtagusecase } from "./Listtagusecase";

class Listtagcontroller{
    async handle(request:Request, response:Response){
        const tag = request.params.title_tag
        const listtagusecase = container.resolve(Listtagusecase)
        const list = await listtagusecase.execute(tag)
        return response.json(list)
    }
}
export {Listtagcontroller}