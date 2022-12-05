import { Request, Response } from "express";
import { container } from "tsyringe";
import { Updatevideosusecase } from "./Updatevideosusecase";

class Updatevideoscontroller{
    async handle(request:Request,response:Response){
        const{id} = request.params;
        const{tags,name,url} = request.body
        const updatevideosusecase = container.resolve(Updatevideosusecase)
        const update = await updatevideosusecase.execute({id,name,url,tags})
        return response.json(update)
    }
}
export {Updatevideoscontroller}