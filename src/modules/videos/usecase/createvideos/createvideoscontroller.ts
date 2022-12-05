import { Request, Response } from "express";
import { container } from "tsyringe";
import { Createvideosusecase } from "./Createvideosusecase";

class Createvideoscontroller{
    async handle(request:Request, response:Response){
        const{body} = request
        const createvideosusecase = container.resolve(Createvideosusecase)
        const video = await createvideosusecase.execute(body)
        return response.json(video)
    }
}
export {Createvideoscontroller}