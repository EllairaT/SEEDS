import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'

// Name input
export function NameInput(props) {
  //useState returns an array. first item is current value, second val is the value to set it to
  const [name, setName] = useState('')
  const onChange = (event) => setName(event.target.value)

  return (
    <Form.Control
      type="text"
      value={name}
      ref={props.ref}
      placeholder="Enter Name"
      onChange={onChange}
      className="mt-3 mb-3"
    />
  )
}

//Email input
export function EmailInput(props) {
  const [email, setEmail] = useState('example@email.com')
  const onChange = (event) => setEmail(event.target.value)

  return (
    <Form.Control
      type="email"
      value={email}
      ref={props.ref}
      placeholder="Enter Name"
      onChange={onChange}
      className="mt-3 mb-3"
    />
  )
}

// Password input
export function PasswordInput(props) {
  const [password, setPassword] = useState('')
  const onChange = (event) => setPassword(event.target.value)

  return (
    <Form.Control
      type="password"
      value={password}
      ref={props.ref}
      placeholder="Enter Password"
      onChange={onChange}
      className="mt-3 mb-3"
    />
  )
}

<<<<<<< Updated upstream
=======
// Keyword input article (searches table for input)
export function DateInput(props) {
  const [date, setDate] = useState('')
  const onChange = (event) => setDate(event.target.value)

  const onKeyDown = (event) => {
    if (event.key === 'Enter') {
      console.log('Enter key was pressed')
      event.preventDefault()
    }
  }
  return (
    <Form.Control
      type="date"
      value={date}
      ref={props.ref}
      placeholder="Author, Title, etc..."
      onChange={onChange}
      onKeyDown={onKeyDown}
      className="mt-3 mb-3"
    />
  )
}

export function URLinput(props) {
  const [URL, setURL] = useState('')
  const onChange = (event) => setURL(event.target.value)

  const onKeyDown = (event) => {
    if (event.key === 'Enter') {
      console.log('Enter key was pressed')
      event.preventDefault()
    }
  }
  return (
    <Form.Control
      type="URL"
      value={URL}
      ref={props.ref}
      placeholder="URL..."
      onChange={onChange}
      onKeyDown={onKeyDown}
      className="mt-3 mb-3"
    />
  )
}
>>>>>>> Stashed changes
//TODO: other inputs
