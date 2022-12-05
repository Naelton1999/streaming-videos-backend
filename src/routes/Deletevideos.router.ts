import { Router } from "express";
import { ensurealthenticatedeuser } from "../middlewares/Ensurealthenticateduser";
import { Deletevideocontroller } from "../modules/videos/usecase/deletevideo/Deletevideocontroller";


const Deletevideorouter = Router()
const deletevideocontroller = new Deletevideocontroller()

Deletevideorouter.delete("/:id",ensurealthenticatedeuser, deletevideocontroller.handle)

export {Deletevideorouter}