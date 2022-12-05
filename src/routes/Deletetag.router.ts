import { Router } from "express";
import { ensurealthenticatedeuser } from "../middlewares/Ensurealthenticateduser";
import { Deletetagcontroller } from "../modules/tags/usecase/deletetag/Deletetagcontroller";

const Deletetagrouter= Router()
const deletetagcontroller= new Deletetagcontroller()

Deletetagrouter.delete("/:id",ensurealthenticatedeuser, deletetagcontroller.handle)

export {Deletetagrouter}