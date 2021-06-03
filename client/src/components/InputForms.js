import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import FormGroup from 'react-bootstrap/FormGroup'
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
      value={props.value}
      ref={props.ref}
      placeholder="Enter Name"
      onChange={props.onChange} //onfocusout
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

// Keyword input article (searches table for input)
export function ArticleInput(props) {
  const [searchQuery, setSearchQuery] = useState('')
  const onChange = (event) => setSearchQuery(event.target.value)

  const onKeyDown = (event) => {
    if (event.key === 'Enter') {
      console.log('Enter key was pressed')
      event.preventDefault()
    }
  }
  return (
    <Form.Control
      type="search"
      value={searchQuery}
      ref={props.ref}
      placeholder="Author, Title, etc..."
      onChange={onChange}
      onKeyDown={onKeyDown}
      className="mt-3 mb-3"
    />
  )
}

//Date input
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
      placeholder=""
      onChange={onChange}
      onKeyDown={onKeyDown}
      className="mt-3 mb-3"
    />
  )
}
//TODO: other inputs

//SE Practise search
export function SEPInput(props) {
  const [SEP, setSEP] = useState('SE Method')

  const onChange = (event) => setSEP(event.target.value)
  // const onKeyDown = (event) => {
  //   if (event.key === 'Enter') {
  //     console.log('Enter was pressed!')
  //     event.preventDefault()
  //   }
  // }
  return (

    <Form.Group controlId="SEForm.SelectCustom">
      <Form.Control as="select" rows={8} onChange={onChange} className="mt-3 mb-3" >
        <option disabled>SE Method</option>
        <option>Unit Testing</option>
        <option>Continuous Integration</option>
        <option>Collective Code Ownership </option>
        <option>Refactoring </option>
        <option>Test Driven Development</option>
        <option>Automated Acceptance Testing </option>
        <option>Chaos Engineering</option>
        <option>Continuous Deployment</option>
      </Form.Control>
    </Form.Group >

  )
}



