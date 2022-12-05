import { Router } from "express";
import { ensurealthenticatedeuser } from "../middlewares/Ensurealthenticateduser";
import { Updatevideoscontroller } from "../modules/videos/usecase/updatevideos/Updatevideoscontroller";


const Updatevideosrouter= Router()

const updatevideoscontroller= new Updatevideoscontroller()

Updatevideosrouter.put("/:id",ensurealthenticatedeuser, updatevideoscontroller.handle)

export {Updatevideosrouter}