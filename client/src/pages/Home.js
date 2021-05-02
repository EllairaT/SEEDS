import React from 'react'
import logo from '../logo.svg'

function Home() {
  return (
    <div className="Home">
      <header className="Home-header">
        <img src={logo} className="Home-logo" alt="logo" />
        <div>This is the home page</div>
      </header>
    </div>
  )
}
export default Home
