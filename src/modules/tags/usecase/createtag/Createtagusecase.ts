import {prisma} from "../../../../database/PrismaClient"

interface IRequest{
    name:string
}

class Createtagusecase{
    async execute({name}:IRequest){
        const tagexist = await prisma.tags.findFirst({
            where:{name}
        })
        if(tagexist){throw new Error('ja existe essa tag')}
        
        const tag = await prisma.tags.create({
            data:{name}
        })
        return tag
    }
}
export {Createtagusecase}