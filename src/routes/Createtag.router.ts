import { Router } from "express";
import { ensurealthenticatedeuser } from "../middlewares/Ensurealthenticateduser";
import { Createtagcontroller } from "../modules/tags/usecase/createtag/Createtagcontroller";


const Createtagrouter= Router()

const createtagcontroller= new Createtagcontroller()
Createtagrouter.post("/",ensurealthenticatedeuser, createtagcontroller.handle)

export {Createtagrouter}