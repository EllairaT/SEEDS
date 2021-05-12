import React from 'react'
import { NameInput, EmailInput, PasswordInput } from '../components/InputForms'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Facebook from '../components/Facebook'
import Google from '../components/Google'

function Register() {
  return (
    <div className="Register m-5">
      <h1>Register a new SEEDS account</h1>
      <lead>Add to the rapidly growing repository of software engineering methods!</lead>

      <Container className="p-5">
        <Card style={{ width: '20rem', border: 0 }} className="mx-auto">
          <NameInput />
          <EmailInput />
          <PasswordInput />

          <Button>Register</Button>
          <br />
          <lead>---------or---------</lead>
          <Facebook />
          <Google />
        </Card>
      </Container>
    </div>
  )
}
export default Register
