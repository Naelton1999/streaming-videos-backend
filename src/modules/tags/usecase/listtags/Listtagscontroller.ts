import { Request, Response } from "express";
import { container } from "tsyringe";
import { Listtagsusecase } from "./Listtagsusecase";


class Listtagscontroller{
    async handle(request:Request, response:Response){
        const{id} = request.body
        const listtagsusecase = container.resolve(Listtagsusecase)
        const tags = await listtagsusecase.execute(id)
        return response.json(tags)
    }
}
export {Listtagscontroller}