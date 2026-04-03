import axios from 'axios'
import { ArrowLeftIcon } from 'lucide-react'
import React, { useState } from 'react'
import toast from 'react-hot-toast'
import { Link, useNavigate } from 'react-router-dom'
import api from '../lib/axios'

const CreatePage = () => {
  const navigate=useNavigate()
  const [title,setTitle]=useState('')
  const [content,setContent]=useState('')
  const [loading,setLoading]=useState(false)
  const handleSubmit=async(e)=>{
e.preventDefault();
if(!title || !content){
  toast.error("All fields are required");
  return;
}
setLoading(true)
try{
  await api.post("/",{
    title,content
  })
  toast.success("Notes created successfully")
  navigate("/")
}catch(error){
  toast.error("Something went wrong")
  setLoading(false)
}finally{
  setLoading(false)
}
  }
  return (
   <>
   <div className='min-h-screen'>
<div className='container mx-auto px-8 py-8'>
  <Link to="/" className="flex items-center justify-center gap-2 px-4 py-2 w-fit rounded-full bg-gray-800">
  <ArrowLeftIcon className='text-md'/>
  Back to Notes
  </Link>

</div>
<div className='mx-auto p-4 flex flex-col justify-center items-center'>
  <div className='w-full max-w-lg'>
    <h2 className='text-green-800 text-4xl'>Create New Note</h2>

   <div className='py-2 mt-5'>
     <p className='text-md '>
      Title
    </p>
    <input type="text" placeholder='Enter Note Title' className='mt-2 px-4 py-2 rounded-full w-full border border-green-800 focus:outline-none' value={title} onChange={(e)=>setTitle(e.target.value)}/>
   </div>
   <div className='py-2 mt-5'>
     <p className='text-md '>
      Content
    </p>
    <textarea rows={3} type="text" placeholder='Enter Note Title' className='mt-2 px-4 py-2 rounded-lg w-full border border-green-800 focus:outline-none' value={content} onChange={(e)=>setContent(e.target.value)}/>
   </div>
   <div className='flex justify-end'>
   <button
  disabled={loading}
  className={`px-4 py-2 rounded-lg 
    ${loading ? "bg-gray-400 cursor-not-allowed" : "bg-green-800 cursor-pointer"}`}
  onClick={handleSubmit}
> {loading?"Creating":"Create"}</button>
   </div>
  </div>

</div>
   </div>
   </>
  )
}

export default CreatePage