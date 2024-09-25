import './App.css'
import React, { useState } from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from './components/Nav/Nav';
import  Login from './components/LogInSignUp/Login';
import Shop from './components/Shop/Shop';
import { LoginContext } from './Context/LoginContext';
import Footer from './components/Footer/Footer'
function App() {
  const [isLoggedIn,setIsLoggedIn]=useState(false)

  return (
    <>
    <LoginContext.Provider value={{isLoggedIn,setIsLoggedIn}}>
      <BrowserRouter>
      <Nav/>
        <Routes>
          <Route path='/Login' element={<Login/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </LoginContext.Provider>
    </>
  )
}

export default App
