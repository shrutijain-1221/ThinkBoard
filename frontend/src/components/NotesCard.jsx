import { Link } from 'react-router-dom'
import React from 'react'
import { PenSquareIcon, Trash2Icon } from 'lucide-react'
import { formatData } from '../lib/utils'
import api from '../lib/axios'
import toast from 'react-hot-toast'
const NotesCard = ({note,setNotes}) => {
const handleDelete=async(e,id)=>{
  e.preventDefault();
  try{
     await api.delete(`/${id}`)
     setNotes((prev)=>prev.filter((item)=>item?._id!==id))
     toast.success("Note Deleted Successfully")
  }catch(error){
    toast.error("Failed to delete the note",error)
  }

}
  return (
    <>

    <div>
<Link to={`/${note?._id}`}  className='block bg-black/10 shadow-md text-white  border-t-6 rounded-xl border-green-800 border-solid  hover:shadow-lg transition-all duration-200'>

<div className='p-4'>
    <h3 className='text-md font-bold'>{note?.title}</h3>
        <h3 className='text-base mt-4' >{note?.content}</h3>
        <div className='flex justify-between items-center'>
            <p className='text-sm'>{formatData(note?.createdAt)}</p>
 <div className='mt-4 flex justify-end items-center gap-4'>
             <PenSquareIcon className='text-lg'/>
 <Trash2Icon className='text-md' onClick={(e)=>handleDelete(e,note?._id)}/>
        </div>
        </div>
       
</div>


</Link>
    </div>
    </>
  )
}

export default NotesCard