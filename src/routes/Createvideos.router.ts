import { Router } from "express";
import { ensurealthenticatedeuser } from "../middlewares/Ensurealthenticateduser";
import { Createvideoscontroller } from "../modules/videos/usecase/createvideos/Createvideoscontroller";


const Createvideosrouter= Router()

const createvideoscontroller= new Createvideoscontroller()

Createvideosrouter.post("/",ensurealthenticatedeuser, createvideoscontroller.handle)

export {Createvideosrouter}