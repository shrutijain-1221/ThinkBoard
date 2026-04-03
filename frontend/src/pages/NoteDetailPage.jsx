import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import api from '../lib/axios'
import toast from 'react-hot-toast'
import { ArrowLeftIcon, LoaderIcon, Trash2Icon } from 'lucide-react'
const NoteDetailPage = () => {
   const navigate=useNavigate()
  const[note,setNote]=useState(null)
  const[loading,setLoading]=useState(true)
  const [saving,setSaving]=useState(false)
  const {id}=useParams()
  useEffect(()=>{
    const fetchNote=async()=>{
      try{
     const result=   await api.get(`/${id}`)
        setNote(result.data)
      }catch(error){
        toast.error("Failed to laod the note")
      }finally{
        setLoading(false)
      }
    }
    fetchNote()
  },[id])
  const  handleDelete=async()=>{
 try{
     await api.delete(`/${id}`)
    
     toast.success("Note Deleted Successfully")
     navigate("/")
  }catch(error){
    toast.error("Failed to delete the note",error)
  }
  }
  const handleSubmit=async()=>{
    if(!note.title.trim() || !note.content.trim()){
      toast.error("Please add a title or content")
      return;
    }
    setSaving(true)
    try{
await api.put(`/${id}`,note)
toast.success("Note updated successfully")
navigate("/")
    }catch(error){
toast.error("Failed to update the note")
    }finally{
      setSaving(false)
    }
  }
  return (
   <>
   {loading && (
    <div className='min-h-screen flex items-center justify-center'>
      <LoaderIcon className='animate-spin size-10'/>
    </div>
   )}
 <div className='min-h-screen'>
 <div className='container mx-auto px-8 py-8'>
   <Link to="/" className="flex items-center justify-center gap-2 px-4 py-2 w-fit rounded-full bg-gray-800">
   <ArrowLeftIcon className='text-md cursor-pointer'/>
   Back to Notes
   </Link>
   </div>
  
    <div className='mx-auto p-4 flex flex-col justify-center items-center'>
  <div className='w-full max-w-lg '>
    <div className='flex justify-between items-center'>
      <h2 className='text-green-800 text-4xl'>Create New Note</h2>
<Trash2Icon className='w-5 h-5' onClick={handleDelete}/>
    </div>
     <div className='py-2 mt-5'>
     <p className='text-md '>
      Title
    </p>
    <input type="text" placeholder='Enter Note Title' className='mt-2 px-4 py-2 rounded-full w-full border border-green-800 focus:outline-none' value={note?.title} onChange={(e)=>setNote({...note,title:e.target.value})}/>
   </div>
   <div className='py-2 mt-5'>
     <p className='text-md '>
      Content
    </p>
    <textarea rows={3} type="text" placeholder='Enter Note Title' className='mt-2 px-4 py-2 rounded-lg w-full border border-green-800 focus:outline-none' value={note?.content} onChange={(e)=>setNote({...note,content:e.target.value})}/>
   </div>
   <div className='flex justify-end'>
    <button
  disabled={saving}
  className={`px-4 py-2 rounded-lg 
    ${saving ? "bg-gray-400 cursor-not-allowed" : "bg-green-800 cursor-pointer"}`}
  onClick={handleSubmit}
> {saving?"Saving":"Save"}</button>
   </div>
   </div>
   </div>
   </div>
   </>
  )
}

export default NoteDetailPage