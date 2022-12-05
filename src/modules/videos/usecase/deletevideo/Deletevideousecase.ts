import { prisma } from "../../../../database/PrismaClient"


class Deletevideousecase{
    async execute(id:string){
        const video= await prisma.videos.delete({
            where:{id},
            include:{
                tags:{
                    include:{
                        tag:true
                    }
                }
            }
        })
    }
}
export {Deletevideousecase}

