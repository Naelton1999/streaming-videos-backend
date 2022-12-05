import { Router } from "express";
import { ensurealthenticatedeuser } from "../middlewares/Ensurealthenticateduser";
import { Findvideocontroller } from "../modules/videos/usecase/findvideo/Findvideocontroller";


const Findvideorouter= Router();

const findvideocontroller= new Findvideocontroller()

Findvideorouter.get("/:id",ensurealthenticatedeuser, findvideocontroller.handle)

export {Findvideorouter}