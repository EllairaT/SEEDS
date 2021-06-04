import React, { useState, useEffect } from "react"
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import { Input } from '../components/InputForms'
import { Route } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { Redirect } from 'react-router-dom'
import SubmissionReceived from '../pages/SubmissionReceived'

export default function Submit() {
      const [name, setName] = useState("")
      const [selectedFile, setSelectedFile] = useState(null)

      // const dispatch = useDispatch()
      // useEffect(() => {
      //       dispatch(getSEMethods())
      // }, [dispatch])

      return (
            <div>
                  <div className="Submit mt-5">
                        <Container className="">
                              <h4 className="float-left">Submit an Article!</h4>

                              <Card style={{ width: '18rem', border: 0 }} className="mx-auto">
                                    <span>Updates regarding the status of your article will be sent to this address:</span>
                                    <Input type="email" placeholder="example@email.com" />
                                    <span>Leave the fields blank if the file contains the relevant information.</span>
                                    <Form>
                                          <Input type="text" placeholder="Article Title" />
                                          <Input type="text" placeholder="Author(s)" />
                                          <Input type="text" placeholder="Year" />
                                          <Input type="select" placeholder="SE Method" as="select" options="" />
                                          <Input type="text" placeholder="Additional Details" />
                                          <Input type="File" placeholder="" />

                                    </Form>

                                    <Button type="submit" href="./SubmissionReceived">Submit Article</Button>

                                    {/* Make an alert on submission. You will receive an email when the SEEDS team has moderated your article and deemed it accepted or rejected. */}
                                    <span></span>
                              </Card>
                        </Container>
                  </div>
            </div>
      )
}
