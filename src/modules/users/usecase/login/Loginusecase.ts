import { sign } from "jsonwebtoken"
import {compare} from "bcrypt";
import { prisma } from "../../../../database/PrismaClient";

interface IAuthenticateduser{
    email:string,
    password:string
}

class Authenticateduserusecase{
    async execute({email,password}:IAuthenticateduser){
        const user = await prisma.users.findFirst({
            where:{email}
        })
        if(!user){throw new Error('username invalid')}

        const passwordmathc = await compare(password, user.password)
        if(!passwordmathc){throw new Error('username invalid')}

        const token = sign({email}, "8441653b5b1ef8078b937d39f0374c95", {
            subject: user.id,
            expiresIn:'1d'
        })
        return token
    }
}
export {Authenticateduserusecase}