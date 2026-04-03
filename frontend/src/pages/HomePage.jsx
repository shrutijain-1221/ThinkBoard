import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import axios from "axios";
import toast from "react-hot-toast"
import NotesCard from '../components/NotesCard';
import api from '../lib/axios';
import NoNotesFound from './NoNotesFound';
const HomePage = () => {
  const [notes,setNotes]=useState([])
  const[loading,setLoading]=useState(true)
  useEffect(()=>{
const fetchNotes=async()=>{
  try{
    const res=await api.get('/')
    setNotes(res?.data)
  }catch(error){
    toast.error("Failed to load notes")
    console.log(error)
  }
}
fetchNotes()
  },[])
  return (
   <>
   <div className='min-h-screen'>
     <Navbar/>
<div className='mt-5 p-4 mx-auto'>
  {notes.length===0 && (
    <NoNotesFound/>
  )}
<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 '>
{notes.length>0 && notes.map((item)=>(
  <NotesCard key={item?._id} note={item} setNotes={setNotes}/>
))}
</div>
</div>
   </div>
   </>
  )
}

export default HomePage