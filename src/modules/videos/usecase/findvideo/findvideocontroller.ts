import { container } from "tsyringe";
import { Request, Response } from "express";
import { Listvideousecase } from "./Findvideousecase";


class Findvideocontroller{
    async handle(request:Request,response:Response){
        const{id} = request.params;
        const findvideousecase = container.resolve(Listvideousecase)
        const list = await findvideousecase.execute(id)
        return response.json(list)
    }
}
export {Findvideocontroller}