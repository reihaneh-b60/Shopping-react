import { useState } from 'react'
import { Button } from 'react-bootstrap'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './component/basalam/HomePage'
import Login from './component/pages/loginpage/login'
import Test from './component/pages/testPage/test'
import Err from './component/Router_react/404/404'
import Home from './component/Router_react/HomePage/HomePage'
import Product from './component/Router_react/Product/Product'

function App() {
  
  return (
    <>
     <HomePage/> 
    </>
  )
}

export default App
