import React, { useState } from "react"
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import { NameInput, EmailInput } from '../components/InputForms'




export default function Submit() {
    const [name, setName] = useState("")
    const [selectedFile, setSelectedFile] = useState(null)

    return (
        <div>
            <div className="Submit mt-5">
      <Container className="">
        <h4 className="float-left">Submit an Article!</h4>

        <Card style={{ width: '18rem', border: 0 }} className="mx-auto">
          <p>Enter the email you wish to receive updates on the status of your article to:</p>
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

        <input type="file" />
      </form>
        <p></p>
          <Button type="submit">
            Submit Article
          </Button>
          {/* Make an alert on submission. You will receive an email when the SEEDS team has moderated your article and deemed it accepted or rejected. */}
          <span></span>
        </Card>
      </Container>
    </div>
        </div>
    )
}
