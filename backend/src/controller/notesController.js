import Note from "../models/Notes.js";

export async function getAllNotes(req,res){
    try{
        const notes=(await Note.find());
        res.status(200).json(notes)
    }catch(error){
        console.log(error)
        res.status(500).json({message:error})
    }
}
export async function getSingleNotes(req,res){
    try{
        const {id}=req.params;
          if (!id) {
      return res.status(400).json({ message: "ID is required" });
    }

    const note = await Note.findById(id);

    if (!note) {
      return res.status(404).json({ message: "Note not found" });
    }


      
        res.status(200).json(note)
    }catch(error){
        res.status(500).json({message:error})
    }

}
export async function createNote(req,res){
try{
    const {title,content}=req.body
    const newNote=new Note({title,content})
    await newNote.save()
    res.status(201).json({message:"Note created successfully"})
}catch(error){
     res.status(500).json({message:error})
}
}
export async function updateNote(req,res){
  try{
     const {id}=req.params
     const note=await Note.findById(id)
   const {title,content}=req.body
    if(!note){
      return      res.status(400).json({message:"No notes exists"})
        }

   await Note.findByIdAndUpdate(id,{title,content})
   res.status(200).json({message:"Note Updated Successfully"})
  }catch(error){
     res.status(500).json({message:error})
}
   
}
export async function deleteNote(req,res){
try{
     const {id}=req.params
     const note=await Note.findById(id)
     if(!note){
     return       res.status(400).json({message:"No notes exists"})
        }
        await Note.findByIdAndDelete(id)
        res.status(200).json({message:"Note Deleted Successfully"})
}catch(error){
     res.status(500).json({message:error})
}
}