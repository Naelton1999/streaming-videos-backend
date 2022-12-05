import { Router } from "express";
import { ensurealthenticatedeuser } from "../middlewares/Ensurealthenticateduser";
import { Listvideoscontroller } from "../modules/videos/usecase/listvideos/Listvideoscontroller";


const Listvideosrouter= Router()

const listvideoscontroller= new Listvideoscontroller()

Listvideosrouter.get("/",ensurealthenticatedeuser, listvideoscontroller.handle)

export {Listvideosrouter}