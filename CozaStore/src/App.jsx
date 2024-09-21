import './App.css'
import React from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from './components/Nav/Nav';
import  Login from './components/LogInSignUp/Login';
import Shop from './components/Shop/Shop';
function App() {


  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route path='/' element={<Nav/>}>
          <Route path='/Login' element={<Login/>}/>
          <Route path='/Shop' element={<Shop/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
