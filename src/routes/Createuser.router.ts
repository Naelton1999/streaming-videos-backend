import { Router } from "express";
import { ensurealthenticatedeuser } from "../middlewares/Ensurealthenticateduser";
import { Createuserscontroller } from "../modules/users/usecase/createusers/Createuserscontroller";


const Createusersrouter= Router();

const createuserscontroller= new Createuserscontroller()

Createusersrouter.post("/",ensurealthenticatedeuser, createuserscontroller.handle)

export {Createusersrouter}