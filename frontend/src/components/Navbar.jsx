import React from 'react'
import {PlusIcon} from "lucide-react"
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
   <>
  <div className='mx-auto max-w-6xl p-4  border-b border-white'>
    <div className='flex justify-between items-center'>
<p className='text-3xl font-bold text-green-800'>ThinkBoards</p>
<div className='flex  items-center gap-4'>
<Link to="/create" className="px-4 py-2 bg-green-800 text-white flex flex-row rounded-full">
<PlusIcon className='text-md'/>
<span>New Notes</span>
</Link>
</div>
    </div>


  </div>
   </>
  )
}

export default Navbar