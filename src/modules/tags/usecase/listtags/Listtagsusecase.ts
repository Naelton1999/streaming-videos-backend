import {prisma} from "../../../../database/PrismaClient"


class Listtagsusecase{
    async execute(id:string){
        const tags= await prisma.tags.findMany({
            where:{id}
        })
        return tags
    }
}
export {Listtagsusecase}