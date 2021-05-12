import React, { useState } from 'react'
import { NameInput, EmailInput, PasswordInput } from '../components/InputForms'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Facebook from '../components/Facebook'
import Google from '../components/Google'
import Form from 'react-bootstrap/Form'
import { ActionCreators } from '../actions/users'
// import '../../../server/validation'
function Register(props) {
  // const onChange = (event) => setPassword(event.target.value)
  const [state, setState] = useState({
    user: {
      name: '',
      email: '',
      password: ''
    },
    submitted: false
  })

  const submitForm = async (evt) => {
    setState.submitted = true
    props.dispatch(ActionCreators.register)
    const user = state

    evt.preventDefault() //prevent user from entering data with enter
  }

  const handleSubmit = (evt) => {
    evt.preventDefault()
  }
  return (
    <div className="Register m-5">
      <h1>Register a new SEEDS account</h1>
      <lead>Add to the rapidly growing repository of software engineering methods!</lead>

      <Container className="p-5">
        <Card style={{ width: '20rem', border: 0 }} className="mx-auto">
          <Form>
            <NameInput />
            <EmailInput />
            <PasswordInput />
            <Button className="mt-3 mb-3" style={{ width: '100%' }}>
              Register
            </Button>
          </Form>
          <br />
          <lead>or</lead>
          <Facebook />
          <Google />
        </Card>
      </Container>
    </div>
  )
}
export default Register
