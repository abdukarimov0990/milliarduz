import React from 'react'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router'
import MainLayout from './layouts/MainLayout'
import Home from './pages/Home'
import Cases from './pages/Cases'
import About from './pages/About'
import Contact from './pages/Contact'

const App = () => {
  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<MainLayout/>}>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/cases' element={<Cases/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='contact' element={<Contact/>}></Route>
      </Route>
    )
  )
  return(
     <RouterProvider router={routes}/>
  
  )

}

export default App
