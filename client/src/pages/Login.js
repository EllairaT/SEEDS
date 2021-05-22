import React, { useState, useEffect } from 'react'
import Facebook from '../components/Facebook'
import Google from '../components/Google'
import { EmailInput, PasswordInput } from '../components/InputForms'
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import '../style/login.css'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'

function Login() {
  const [userData, setUserData] = useState({ name: '', pass: '' })
  const users = useSelector((state) => state.users)
  const dispatch = useDispatch()


  // useEffect(() => {
  //   if (post) setPostData(post);
  // }, [post]);


  const handleSubmit = () => {
    console.log(userData)
  }
  return (
    <div className="Login mt-5">
      <Container className="">
        <h4 className="float-left">Login</h4>

        <Card style={{ width: '18rem', border: 0 }} className="mx-auto">
          <EmailInput />
          <PasswordInput />

          <Button type="submit" onClick={handleSubmit}>
            Log in
          </Button>

          <span>or</span>
          <Facebook />
          <Google />
        </Card>
      </Container>
    </div>
  )
}
export default Login
