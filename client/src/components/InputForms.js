import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'

export function NameInput(props) {
  //useState returns an array. first item is current value, second val is the value to set it to
  const [name, setName] = useState('')
  const onChange = (event) => setName(event.target.value)

  const handleSubmit = (evt) => {
    evt.preventDefault() //prevent default behavior, in this case entering data when 'enter' is pressed
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId={props.controlId}>
        <Form.Label className="float-left">Name</Form.Label>
        <Form.Control type="text" value={name} ref={props.ref} placeholder="Enter Name" onChange={onChange} />
      </Form.Group>
    </Form>
  )
}

export function EmailInput(props) {
  const [email, setEmail] = useState('example@email.com')

  const handleSubmit = (evt) => {
    evt.preventDefault() //prevent default behavior, in this case entering data when 'enter' is pressed
  }

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Control
            type="email"
            value={props.value}
            name={props.name}
            ref={props.ref}
            placeholder={props.placeholder}
          />
        </Form.Group>
      </Form>
    </div>
  )
}

export function PasswordInput(props) {
  const [password, setPassword] = useState('')

  const handleSubmit = (evt) => {
    evt.preventDefault() //prevent default behavior, in this case entering data when 'enter' is pressed
  }

  return (
    <div>
      <Form.Control
        type="password"
        value={props.value}
        name={props.name}
        ref={props.ref}
        placeholder={props.placeholder}
      />
    </div>
  )
}
