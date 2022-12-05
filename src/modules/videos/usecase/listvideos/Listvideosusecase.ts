import { prisma } from "../../../../database/PrismaClient"


class Listvideosusecase{
    async execute(id:string){
        const list = await prisma.videos.findMany({
            where:{id},
            include: {
                tags: {
                    include: {
                        tag: true
                    }
                }
            }
        })
        return list
    }
}
export {Listvideosusecase}