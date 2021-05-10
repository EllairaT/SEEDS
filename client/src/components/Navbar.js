import React from 'react'
import { Route } from 'react-router-dom'
// Import pages
import Login from '../pages/Login'
import Home from '../pages/Home'
import Register from '../pages/Register'
// Import bootstrap components
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

function NavBar() {
  return (
    <>
      <Navbar className="navbar-dark bg-dark p-3" variant="dark">
        <Navbar.Brand href="/">SEEDS</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/Login">Login</Nav.Link>
          <Nav.Link href="/Register">Register</Nav.Link>
        </Nav>
      </Navbar>

      <Route exact path="/" component={Home} />
      <Route exact path="/Login" component={Login} />
      <Route exact path="/Register" component={Register} />
    </>
  )
}

export default NavBar
