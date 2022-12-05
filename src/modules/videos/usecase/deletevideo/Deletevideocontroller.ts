import { Request, Response } from "express";
import { container } from "tsyringe";
import { Deletevideousecase } from "./Deletevideousecase";

class Deletevideocontroller{
    async handle(request:Request,response:Response){
        const{id} = request.params
        const deletevideousecase = container.resolve(Deletevideousecase)
        const video = await deletevideousecase.execute(id)
        return response.status(201).json('o video foi deletado com sucesso')
    }
}
export {Deletevideocontroller}