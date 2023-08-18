//use npm install before running this code

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { createBrowserRouter, createRoutesFromElements, Route, Link, Outlet, RouterProvider } from 'react-router-dom';
import './App.css';
import logo from '../images/logo.jpg'

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/'element={<Root/>}>
        <Route path="https://saugusth.github.io/tindog/"/>
        <Route path="https://saugusth.github.io/DrumKit/" />
        <Route path='https://saugusth.github.io/simon/'></Route>
      </Route>
    )
  )
  return (
    <div>
      <img src={logo} alt="logo" />
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
      <div id="link">
        <button><Link to="https://saugusth.github.io/DrumKit/">DrumKit</Link></button>
        <button><Link to="https://saugusth.github.io/simon/">Simon</Link></button>
        <button><Link to="https://saugusth.github.io/tindog/">Tindog</Link></button>
      </div>
      <div>
        <Outlet/>
      </div>
    </>  
  )
}

export default App
