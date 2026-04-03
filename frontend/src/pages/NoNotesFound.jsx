import { NotebookIcon } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

const NoNotesFound = () => {
  return (
    <div className='flex flex-col justify-between items-center'>
<NotebookIcon className='text-lg text-green-800'/>
<h3 className='text-green-800 mt-3 text-lg'>No Notes Found</h3>
<p className='text-green-800 text-md mt-3'>Ready to organize your thoughts ? Create your first note to get started on your journey</p>
<Link to="/create" className='mt-4 px-4 py-2 bg-green-800 text-white flex flex-row rounded-full'>Create your First note</Link>
    </div>
  )
}

export default NoNotesFound