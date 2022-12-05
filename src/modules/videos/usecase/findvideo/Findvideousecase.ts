import { prisma } from "../../../../database/PrismaClient";


class Findvideousecase{
    async execute(id:string){
        let videos = await prisma.videos.findFirst({
            where:{id},
            include: {
                tags: {
                    include: {
                        tag: true
                    }
                }
            }
        })

        if(!videos){throw new Error('id não encontrado')}

        return videos;
    }
}
export {Findvideousecase}