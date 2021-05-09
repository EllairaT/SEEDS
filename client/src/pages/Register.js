import React from 'react'
import { NameInput, EmailInput, PasswordInput } from '../components/InputForms'
import InputGroup from 'react-bootstrap/InputGroup'

function Register() {
  return (
    <div className="Register">
      <header className="Register-header"></header>
      <InputGroup>
        <NameInput />
        <EmailInput />
        <PasswordInput />
      </InputGroup>
    </div>
  )
}
export default Register
