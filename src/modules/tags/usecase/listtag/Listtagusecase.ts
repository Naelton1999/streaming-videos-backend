import { prisma } from "../../../../database/PrismaClient"


class Listtagusecase{
    async execute(tag: string){
        const list = await prisma.videos.findMany({
            where: {
                tags: {
                    some: {
                        tag: {
                            name: tag
                        }
                    }
                }
            },
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
export {Listtagusecase}