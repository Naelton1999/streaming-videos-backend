import { Videos } from "@prisma/client"
import {prisma} from "../../../../database/PrismaClient"

interface IUpdate{
    tags:any,
    id:string
    url:string
    name:string
} 

class Updatevideosusecase{
    async execute({tags,id,url,name}:IUpdate):Promise<Videos>{
        const update= await prisma.videos.update({
            where:{id},
            data:{
                url,
                name,
                tags: {
                    deleteMany:{
                        id_video:id
                    },
                    connectOrCreate: tags.map((tag: any) => ({
                        create: {
                            id_tag: tag.id
                        },
                        where: {
                            id: tag.id
                        }
                    }
                    ))
                },
            }
        })
        return update
    }
}
export {Updatevideosusecase}