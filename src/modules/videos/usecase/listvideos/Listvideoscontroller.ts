import { Request, Response } from "express";
import { container } from "tsyringe";
import { Listvideosusecase } from "./Listvideosusecase";

class Listvideoscontroller{
    async handle(request:Request,response:Response){
        const{id} = request.body
        const listvideosusecase = container.resolve(Listvideosusecase)
        const list = await listvideosusecase.execute(id)
        return response.json(list)
    }
}
export {Listvideoscontroller}