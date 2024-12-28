import "./config/instrument.js";
import express from "express";
import cors from "cors"
import "dotenv/config";
import { connectDB } from "./config/db.js";
import * as Sentry from "@sentry/node";
import { webhook } from "./controller/userController.js";


//config
const app=express()
const port = 5001;

//middleware
app.use(express.json())
app.use(cors())

//DB Connection

connectDB();

Sentry.setupExpressErrorHandler(app);


//Routes
app.get('/',(req,res)=>{
    res.send("API Working");
})
app.get("/debug-sentry", function mainHandler(req, res) {
    throw new Error("My first Sentry error!");
  });

app.post("/webhooks",webhook);

app.listen(port,()=>{
    console.log(`Server is running on http://localhost:${port}`)
})


