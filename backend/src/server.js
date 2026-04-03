import express, { json } from "express"
import notesRouter from "./routes/noteRoutes.js";
import dotenv from "dotenv/config"
import { connectDB } from "./config/db.js";
import cors from 'cors'
connectDB()
const app=express();
app.use(cors(
    {
        origin:"http://localhost:5173"
    }
))
app.use(express.json())

app.use('/api/notes',notesRouter)


app.listen(process.env.PORT,()=>{
    console.log('server running on port 5000')
})

 