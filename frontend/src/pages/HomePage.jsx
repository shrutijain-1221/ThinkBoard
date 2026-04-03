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
{Array.isArray(notes) && notes.length === 0 && <NoNotesFound />}

<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4 px-4 py-2'>
  {Array.isArray(notes) &&
    notes.map((item) => (
      <NotesCard key={item?._id} note={item} setNotes={setNotes} />
    ))}
</div>
   </div>
   </>
  )
}

export default HomePage