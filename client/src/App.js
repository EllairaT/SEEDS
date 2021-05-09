import React from 'react'
import './css/App.css'
import NavBar from './components/Navbar'
import Container from 'react-bootstrap/Container'

function App() {
  return (
    <>
      <div className="App bg-primary">
        <Container fluid="true">
          <NavBar />
          <small>SEEDS App created by: Ellaira, Jordan, StJohn</small>
        </Container>
      </div>
    </>
  )
}
export default App
