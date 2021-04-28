import React from 'react'
import './App.css'
import Login from './Login'
import Home from './Home'
import { Route } from 'react-router-dom'
import Navbar from './Navbar'

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
