import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Register from './pages/Register'
import Login from './pages/Login'
import Chat from './pages/Chat'

export default function App() {
  return <BrowserRouter>
  <Routes>
    <Route path='/register' element={<Register/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/setAvatar' element={<setAvatar/>}/>
    <Route path='/' element={<Chat/>}/>
  </Routes>
  </BrowserRouter>
}
