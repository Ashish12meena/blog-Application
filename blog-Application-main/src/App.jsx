import { useState } from 'react'
import './App.css'


import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom'
import PostCard from './components/PostCard'
import Header from './components/Header'



function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<PostCard />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
