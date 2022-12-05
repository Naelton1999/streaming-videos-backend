import { Router } from "express";
import { Authenticatedusercontroller } from "../modules/users/usecase/login/Logincontroller";


const Authenticateduserrouter= Router()
const authenticatedusercontroller= new Authenticatedusercontroller()

Authenticateduserrouter.post("/", authenticatedusercontroller.handle)

export {Authenticateduserrouter}