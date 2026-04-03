import express from "express"
import { getAllNotes,getSingleNotes,updateNote,deleteNote,createNote } from "../controller/notesController.js";
const router=express.Router()

router.get("/", getAllNotes);

router.get("/:id", getSingleNotes);

router.post("/", createNote);

router.delete("/:id", deleteNote);

router.put("/:id", updateNote);

export default router