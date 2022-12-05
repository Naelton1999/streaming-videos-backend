import {prisma} from "../../../../database/PrismaClient"

interface IUpdate{
    name:string,
    id:string
}

class Updatetagusecase{
    async execute({name,id}:IUpdate){
        const update = await prisma.tags.update({
            where:{id},
            data:{name}
        })
        return update
    }
}
export {Updatetagusecase}