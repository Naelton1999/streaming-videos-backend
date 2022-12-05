import { Request, Response } from "express";
import { container } from "tsyringe";
import { Createusersusecase } from "./Createusersusecase";

class Createuserscontroller{
    async handle(request:Request, response:Response){
        const{body} = request;
        const createusersusecase = container.resolve(Createusersusecase)
        const users = await createusersusecase.execute(body)
        return response.json(users)
    }
}
export {Createuserscontroller}