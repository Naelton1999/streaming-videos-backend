import "express-async-errors";
import { NextFunction, Request, Response } from 'express';
import "reflect-metadata"
import express from "express";
import "reflect-metadata";
import { Createusersrouter } from "./routes/Createuser.router";
import { Authenticateduserrouter } from "./routes/Login.router";
import { Createvideosrouter } from "./routes/Createvideos.router";
import { Listvideosrouter } from "./routes/Listvideos.router";
import { Findvideorouter } from "./routes/Dindvideorouter";
import { Deletevideorouter } from "./routes/Deletevideos.router";
import { Createtagrouter } from "./routes/Createtag.router";
import { Listtagrouter } from "./routes/Listtag.router";
import { Listtagsrouter } from "./routes/Listtagsrouter";
import { Updatevideosrouter } from "./routes/Updatevideos.router";
import { Updatetagrouter } from "./routes/Updatetag.router";
import { Deletetagrouter } from "./routes/Deletetag.router";


const app= express();
app.use(express.json());

app.use("/users", Createusersrouter)
app.use("/login", Authenticateduserrouter)
app.use("/videos", Createvideosrouter)
app.use("/videos", Listvideosrouter)
app.use("/videos", Findvideorouter)
app.use("/videos", Deletevideorouter)
app.use('/tags', Createtagrouter)
app.use("/tags", Listtagrouter)
app.use("/tags", Listtagsrouter)
app.use("/videos", Updatevideosrouter)
app.use("/tags", Updatetagrouter)
app.use("/tags", Deletetagrouter)


app.use((err:Error, request: Request, response: Response, next: NextFunction)=>{
    if(err instanceof Error){
        return response.status(400).json({mesage:err.message})
    }
    return response.status(500).json({status:'error', message:"internal server error"})
})

app.listen(3333, ()=>{console.log('ola')})