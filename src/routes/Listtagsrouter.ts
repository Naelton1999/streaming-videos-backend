import { Router } from "express";
import { ensurealthenticatedeuser } from "../middlewares/Ensurealthenticateduser";
import { Listtagscontroller } from "../modules/tags/usecase/listtags/Listtagscontroller";



const Listtagsrouter= Router()

const listtagscontroller= new Listtagscontroller()

Listtagsrouter.get("/",ensurealthenticatedeuser, listtagscontroller.handle)

export {Listtagsrouter}