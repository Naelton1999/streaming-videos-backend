import { container } from "tsyringe";
import { Request, Response } from "express";
import { Listvideosusecase } from "../listvideos/Listvideosusecase";



class Findvideocontroller{
    async handle(request:Request,response:Response){
        const{id} = request.params;
        const listvideousecase = container.resolve(Listvideosusecase)
        const list = await listvideousecase.execute(id)
        return response.json(list)
    }
}
export {Findvideocontroller}