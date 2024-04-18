import { useState } from 'react'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Home from './components/Home'
import Header from './components/Header'
import Footer from './components/Footer'


function App() {
  return (      
     <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element = {<Home />} />
      </Routes>
      <Footer />
     </BrowserRouter>
  )
}

export default App
