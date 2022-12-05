import { prisma } from "../../../../database/PrismaClient"

interface ICreatevideos{
    name: string,
    url: string,
    tags: any
}

class Createvideosusecase {
    async execute({name, url, tags}:ICreatevideos){
        const videoexist = await prisma.videos.findFirst({
            where: { url }
        })

        if(videoexist){throw new Error('ja existe essa url')}

        const exist = await prisma.videos.findFirst({
            where:{name}
        })

        if(exist){throw new Error('ja existe esse name')}

        const video = await prisma.videos.create({
            data: {
                name, url,
                tags: {
                    connectOrCreate: tags.map((tag: any) => ({
                        create: {
                            id_tag: tag.id
                        },
                        where: {
                            id: tag.id
                        }
                    }))
                }
            },
            include:{
                tags:{
                    include:{tag:true}
                }
            }
        })
        return video
    }
}
export {Createvideosusecase}
