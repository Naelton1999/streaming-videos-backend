import { NextFunction } from "express";
import { Request, Response } from "express";
import { verify } from "jsonwebtoken";

interface Ipayload{
    sub:string
}

export async function ensurealthenticatedeuser(request:Request, response:Response, next:NextFunction){
    const authheader = request.headers.authorization;
    if(!authheader){return response.status(401).json({message:'token missing'})}

    const [,token] = authheader.split(" ")

    try{
        const {sub} = verify(token, '8441653b5b1ef8078b937d39f0374c95') as Ipayload
        request.id_user = sub
        
        return next()
    }catch(err){
        return response.status(401).json({
            message:'token invalid'
        })
    }
} 