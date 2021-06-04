import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import FormGroup from 'react-bootstrap/FormGroup'
//handling submits should be done in the file where the <Form> tag is.

// Name input
export function Input(props) {
  //useState returns an array. first item is current value, second val is the value to set it to
  const [input, setInput] = useState('')
  const onChange = (event) => setInput(event.target.value)

  const onKeyDown = (event) => {
    if (event.key === 'Enter') {
      console.log('Enter was pressed!')
      event.preventDefault()
    }
  }

  let form

  if (props.type === "select") {
    form = (
      <Form.Control
        as={props.type}
        ref={props.ref}
        placeholder={props.placeholder}
        onChange={props.onChange} //onfocusout
        onKeyDown={onKeyDown}
        className="mt-3 mb-3" >
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
    )
  }
  else {
    form = (<Form.Control
      type={props.type}
      value={props.value}
      ref={props.ref}
      placeholder={props.placeholder}
      onChange={props.onChange} //onfocusout
      onKeyDown={onKeyDown}
      className="mt-3 mb-3"
    />)
  }

  return (
    <>{form}</>
  )
}

