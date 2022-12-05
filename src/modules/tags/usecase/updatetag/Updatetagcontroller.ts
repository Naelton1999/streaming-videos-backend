import { container } from "tsyringe";
import { Updatetagusecase } from "./Updatetagusecase";
import { Request, Response } from "express";

class Updatetagcontroller{
    async handle(request:Request,response:Response){
        const{id} = request.params;
        const{name} = request.body
        const updatetagusecase = container.resolve(Updatetagusecase)
        const update = await updatetagusecase.execute({id,name})
        return response.json(update)
    }
}
export {Updatetagcontroller}