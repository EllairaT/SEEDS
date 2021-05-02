import React from 'react'
import './App.css'
import Login from './pages/Login'
import Home from './pages/Home'
import { Route } from 'react-router-dom'
import Navbar from './components/Navbar'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Route exact path="/" component={Home} />
      <Route exact path="/Login" component={Login} />

      <p>THE FUTURE SEEDS APP STARTS HERE?.</p>
    </div>
  )
}
export default App
