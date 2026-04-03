import express, { json } from "express"
import notesRouter from "./routes/noteRoutes.js";
import dotenv from "dotenv/config"
import { connectDB } from "./config/db.js";
import cors from 'cors'
import path from "path"

connectDB()
const app=express();
const __dirname=path.resolve()
if(process.env.NODE_ENV!=="production"){
app.use(cors(
    {
        origin:"http://localhost:5173"
    }
))
}
app.use(express.json())

app.use('/api/notes',notesRouter)
if(process.env.NODE_ENV==="production"){
    app.use(express.static(path.join(__dirname,"../frontend/dist")))
app.get("*",(req,res)=>{
    res.sendFile(path.join(__dirname,"../frontend","dist","index.html"))
})
}

app.listen(process.env.PORT,()=>{
    console.log('server running on port 5000')
})

 