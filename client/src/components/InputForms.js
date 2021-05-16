import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'

//handling submits should be done in the file where the <Form> tag is.

// Name input
export function NameInput(props) {
  //useState returns an array. first item is current value, second val is the value to set it to
  const [name, setName] = useState('')
  const onChange = (event) => setName(event.target.value)

  const onKeyDown = (event) => {
    if (event.key === 'Enter') {
      console.log('Enter was pressed!')
      event.preventDefault()
    }
  }

  return (
    <Form.Control
      type="text"
      value={name}
      ref={props.ref}
      placeholder="Enter Name"
      onChange={onChange}
      onKeyDown={onKeyDown}
      className="mt-3 mb-3"
    />
  )
}

//Email input
export function EmailInput(props) {
  const [email, setEmail] = useState('')
  const onChange = (event) => setEmail(event.target.value)

  const onKeyDown = (event) => {
    if (event.key === 'Enter') {
      console.log('Enter was pressed!')
      event.preventDefault()
    }
  }
  return (
    <Form.Control
      type="email"
      value={email}
      ref={props.ref}
      placeholder="example@email.com"
      onChange={onChange}
      onKeyDown={onKeyDown}
      className="mt-3 mb-3"
    />
  )
}

// Password input
export function PasswordInput(props) {
  const [password, setPassword] = useState('')
  const onChange = (event) => setPassword(event.target.value)

  const onKeyDown = (event) => {
    if (event.key === 'Enter') {
      console.log('Enter was pressed!')
      event.preventDefault()
    }
  }

  return (
    <Form.Control
      type="password"
      value={password}
      ref={props.ref}
      placeholder="Enter Password"
      onChange={onChange}
      onKeyDown={onKeyDown}
      className="mt-3 mb-3"
    />
  )
}

//TODO: other inputs
