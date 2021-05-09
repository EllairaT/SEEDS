import React from 'react'
import './style/App.css'
import NavBar from './components/Navbar'
import Container from 'react-bootstrap/Container'

function App() {
  return (
    <>
      <div className="App gray-700 text-light">
        <Container fluid="true">
          <NavBar />
          <small>SEEDS App created by: Ellaira, Jordan, StJohn</small>
        </Container>
      </div>
    </>
  )
}
export default App
