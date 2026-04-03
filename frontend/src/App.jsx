import React,{ useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import CreatePage from './pages/CreatePage'
import NoteDetailPage from './pages/NoteDetailPage'
import { Toaster } from 'react-hot-toast'


const App = () => {
  return (
 <div className='w-full h-full'>
  <Toaster/>
  <Routes>
      <Route path="/" element={<HomePage/>}/>
       <Route path="/create" element={<CreatePage/>}/>
        <Route path="/:id" element={<NoteDetailPage/>}/>

    </Routes>
  </div>
  )
}

export default App