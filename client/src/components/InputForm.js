import React from 'react'
import { Link } from 'react-router-dom'

function InputForm(props) {
  return (
    <div>
      <input type={props.type} value={props.value} name={props.name} ref={props.ref}></input>
    </div>
  )
}

export default InputForm
