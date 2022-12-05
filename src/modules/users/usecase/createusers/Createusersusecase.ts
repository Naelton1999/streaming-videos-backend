import {prisma} from "../../../../database/PrismaClient"
import { hash } from "bcrypt"

interface ICreateusers{
    email: string,
    password: string,
}

class Createusersusecase{
    async execute({email, password}: ICreateusers){
        const usersexist = await prisma.users.findFirst({
            where:{email}
        })
        if(usersexist){throw new Error('ja existe esse usuario')}

        const hashpassword = await hash(password, 10);

        const users = await prisma.users.create({
            data:{email, password:hashpassword}
        })

        return users
    }
}
export {Createusersusecase}