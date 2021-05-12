import React, { useState, useEffect } from 'react'
import { NameInput, EmailInput, PasswordInput } from '../components/InputForms'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Facebook from '../components/Facebook'
import Google from '../components/Google'
import Form from 'react-bootstrap/Form'
import { ActionCreators } from '../actions/users'
import { useDispatch, useSelector } from 'react-redux'

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
  // const post = useSelector((state) => (currentId ? state.posts.find((message) => message._id === currentId) : null))

  // const dispatch = useDispatch()
  // useEffect(() => {
  //   if (post) setPostData(post)
  // }, [post])

  const handleSubmit = async (evt) => {
    evt.preventDefault()

    //   if (currentId === 0) {
    //     dispatch(createPost(postData))
    //     clear()
    //   } else {
    //     dispatch(updatePost(currentId, postData))
    //     clear()
    //   }
  }
  return (
    <div className="Register m-5">
      <h1>Register a new SEEDS account</h1>
      <span>Add to the rapidly growing repository of software engineering methods!</span>

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
          <span>or</span>
          <Facebook />
          <Google />
        </Card>
      </Container>
    </div>
  )
}
export default Register
