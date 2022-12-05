import { Router } from "express";
import { ensurealthenticatedeuser } from "../middlewares/Ensurealthenticateduser";
import { Updatetagcontroller } from "../modules/tags/usecase/updatetag/Updatetagcontroller";


const Updatetagrouter= Router()

const updatetagcontroller= new Updatetagcontroller()

Updatetagrouter.put("/:id",ensurealthenticatedeuser, updatetagcontroller.handle)

export {Updatetagrouter}