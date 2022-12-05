import { Request, Response } from "express";
import { container } from "tsyringe";
import { Deletetagusecase } from "./Deletetagusecase";

class Deletetagcontroller{
    async handle(request:Request,response:Response){
        const{id} = request.params
        const deletetagusecase = container.resolve(Deletetagusecase)
        const tag = await deletetagusecase.execute(id)
        return response.status(201).json('A tag foi deletada com sucesso')
    }
}
export {Deletetagcontroller}