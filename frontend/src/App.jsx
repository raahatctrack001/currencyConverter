import { useState } from 'react'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Home from './components/Home'
import Header from './components/Header'
import Footer from './components/Footer'
import PrivacyPolicy from './pages/PrivacyPolicy'
import TermsAndConditions from './pages/TermsAndConditions'


function App() {
  return (      
     <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element = {<Home />} />
        <Route path='/privacy-policy' element = {<PrivacyPolicy />} />
        <Route path='terms-of-service' element = {<TermsAndConditions />} />
      </Routes>
      <Footer />
     </BrowserRouter>
  )
}

export default App
