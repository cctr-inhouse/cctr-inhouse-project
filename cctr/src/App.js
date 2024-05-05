import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './components/home/home';
import Login from './login-signup/login/Login';
import Signup from './login-signup/signup/Signup';
const App = () => {
  return (
    <div>
      <Home/>
    </div>
  )
}

export default App
