import React, { useState } from "react"
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import { EmailInput } from '../components/InputForms'
import { Route } from 'react-router-dom'
import { Redirect } from 'react-router-dom'
import SubmissionReceived from '../pages/SubmissionReceived'

export default function Submit() {
    const [name, setName] = useState("")
    const [selectedFile, setSelectedFile] = useState(null)

    return (
        <div>
            <div className="Submit mt-5">
      <Container className="">
        <h4 className="float-left">Submit an Article!</h4>

        <Card style={{ width: '18rem', border: 0 }} className="mx-auto">
          <span>Corrrespondance regarding the status of your article will be sent to this address:</span>
          <EmailInput />
          <form>
              <p></p>
        <input type="text"
        placeholder="Article title"/>
              <p></p>
        <input type="text"
        placeholder="Author(s)"/>
              <p></p>
              <input type="text"
        placeholder="Year"/>
              <p></p>
              <input type="text"
        placeholder="Additional Details"/>
              <p></p>

        <input type="file" />
      </form>
        <p></p>

        <Button type="submit" href="../SubmissionReceived">Submit Article</Button>
        <p></p>

          {/* Make an alert on submission. You will receive an email when the SEEDS team has moderated your article and deemed it accepted or rejected. */}
          <span></span>
        </Card>
      </Container>
    </div>
        </div>
    )
}
