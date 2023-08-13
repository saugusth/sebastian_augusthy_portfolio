import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { createBrowserRouter, createRoutesFromElements, Route, Link, Outlet, RouterProvider } from 'react-router-dom'
import './App.css'
import { Tindog } from './tindog/Tindog'
import { Home } from './Home/Home'

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/'element={<Root/>}>
        <Route path="/tindog/Tindog" element={<Tindog/>}/>
      </Route>
    )
  )
  return (
    <div>
      <RouterProvider router={router}/>
      <div>
        <h1>Hi, I'M SEBASTIAN AUGUSTHY</h1>
        <p>A web developer with a strong focus on frontend development, responsible for creating the user interfaces of websites and web applications, contributing significantly to the overall success of the product.</p>
        <button><a href="https://github.com/saugusth">GitHub</a></button>
        </div>
    </div>
  )
}

const Root = () => {
  return(
    <>
      <div>
        <Link to="/">Home</Link>
        <Link to="tindog/Tindog">Tindog</Link>
      </div>
      <div>
        <Outlet/>
      </div>
    </>  
  )
}

export default App
