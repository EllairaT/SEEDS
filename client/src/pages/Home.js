import React from 'react'
import Table from '../components/Table'
import Button from 'react-bootstrap/Button'
function Home() {
  displayData = () => {
    return 
  }
  return (
    <div className="Home">
      <header className="Home-header">
        <div>This is the home page</div>
      </header>
      <Button className = "btn btn-primary" onClick={this.displayData}>Fetch data</Button>
      <Table />

    </div>
  )
}
export default Home
