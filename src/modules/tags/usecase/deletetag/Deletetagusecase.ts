import {prisma} from "../../../../database/PrismaClient"

class Deletetagusecase{
    async execute(id:string){
        const tag = await prisma.tags.delete({
            where:{id},
            include:{
                videos:{
                    include:{tag:true}
                }
            }
        })
    }
}
export {Deletetagusecase}

