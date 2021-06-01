import React from 'react'
import { Route } from 'react-router-dom'
// Import pages
import Login from '../pages/Login'
import Home from '../pages/Home'
import Register from '../pages/Register'
import Submit from '../pages/Submit'
import SubmissionReceived from '../pages/SubmissionReceived'
// Import bootstrap components
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'


function NavBar() {
  return (
    <>
      <Navbar className="navbar navbar-expand-lg navbar-dark bg-primary p-3" variant="dark">
        <Navbar.Brand href="/">SEEDS</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/Login">Login</Nav.Link>
          <Nav.Link href="/Register">Register</Nav.Link>
          <Nav.Link href="/Submit">Submit</Nav.Link>
          </Nav>
      </Navbar>

      <Route exact path="/" component={Home} />
      <Route exact path="/Login" component={Login} />
      <Route exact path="/Register" component={Register} />
      <Route exact path="/Submit" component={Submit} />
      <Route exact path="/SubmissionReceived" component={SubmissionReceived} />

    </>
  )
}

export default NavBar
