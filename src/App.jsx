import { useState, useEffect, useContext } from 'react'
import Axios from 'axios'
import './App.css'
import Navbar from './Components/Navbar/Navbar'

import { Routes, Route } from 'react-router-dom'
import ContactUS from './Pages/Contact/ContactUS'
import AboutUs from './Pages/About/AboutUs'
import HomePage from './Pages/Home/HomePage'
import { MyContext } from './Context/Context'
import Cart from './Components/Cart/Cart'
import ErrorPage from './Pages/ErrorPage'
import Footer from './Components/Footer/Footer'
import Header from './Components/Header/Header'

function App() {
 

  return (
    <>
    <Navbar/>
    <Header/>
    <Routes>
      <Route path='/' element={<HomePage/>} />
      <Route path='/contact-us' element={<ContactUS/>} />
      <Route path='/about-us' element={<AboutUs/>} />
      <Route path='/cart' element={<Cart/>} />
      <Route path='*' element={<ErrorPage/>} />
    </Routes>
    <Footer/>
    </>
  )
}

export default App
