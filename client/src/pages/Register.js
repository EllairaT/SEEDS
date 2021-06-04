import React, { useState, setState } from 'react'
import { Input } from '../components/InputForms'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Facebook from '../components/Facebook'
import Google from '../components/Google'
import Form from 'react-bootstrap/Form'

// import { ActionCreators } from '../actions/users.js'
// import { useDispatch, useSelector } from 'react-redux'

function Register() {
  //set initial state
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: ''
  })

  const handleChange = (e) => {
    setUser({ name: e.target.value })
  }

  const [submitted, setSubmitted] = useState(false)
  //useSelector lets us access the data from the store state, which we made in index.js

  const handleSubmit = async (evt) => {
    evt.preventDefault()
  }
  return (
    <div className="Register m-5">
      <h1>Register a new SEEDS account</h1>
      <span>Add to the rapidly growing repository of software engineering methods!</span>

      <Container className="p-5">
        <Card style={{ width: '20rem', border: 0 }} className="mx-auto">
          <Form onSubmit={handleSubmit}>
            <Input type="text" onChange={handleChange} placeholder="Name" />
            <Input type="email" placeholder="example@email.com" />
            <Input type="password" placeholder="password" />
            <Button className="mt-3 mb-3" style={{ width: '100%' }}>
              Register
            </Button>
          </Form>
          <br />
          <span>or</span>
          <Facebook />
          <Google />
        </Card>
      </Container>
    </div>
  )
}
export default Register
