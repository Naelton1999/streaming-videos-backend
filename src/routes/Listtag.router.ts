import { Router } from "express";
import { ensurealthenticatedeuser } from "../middlewares/Ensurealthenticateduser";
import { Listtagcontroller } from "../modules/tags/usecase/listtag/Listtagcontroller";

const Listtagrouter= Router()

const listtagcontroller= new Listtagcontroller()

Listtagrouter.get("/:title_tag/videos",ensurealthenticatedeuser, listtagcontroller.handle)

export {Listtagrouter}
