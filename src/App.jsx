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
     {/* <Routes>
      <Route path='/'>
        <Route index element={<Home/>} />
        <Route path='product' >
          <Route index element={<Err/>}/>
          <Route path=':id' element={<Product/>}/>
        </Route>
      </Route>
     </Routes> */}
     <HomePage/>
    </>

    // <HomePage />
    // <Login/>
    // <Test/>

  )
}

export default App
