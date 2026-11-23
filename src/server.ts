import  express, {type Application } from "express";
import dbConnect from "./config/dbConnect.ts";
import todoRoute from "./Router/todoRouter.ts";


const app:Application =express();

const port:number =8005;
dbConnect();

app.use(express.json());
app.use("/",todoRoute);
app.listen(port,():void=>{
    console.log(`server is running on ${port}`)
});