import React from 'react'
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Nav from 'react-bootstrap/Nav'

export default function SubmissionReceived() {

    return (
        <div>
            <div className="SubmissionReceived mt-5">
      <Container className="">
        <h4 className="float-left">Submission Received!</h4>
        <p>You will receive correspondance regarding the status of your article to the email provided.</p>

        <Card style={{ width: '18rem', border: 0 }} className="mx-auto">
          
          
        <p></p>
        <Button type="submit" href="../">Back to Home</Button>

          {/* Make an alert on submission. You will receive an email when the SEEDS team has moderated your article and deemed it accepted or rejected. */}
          <span></span>
        </Card>
      </Container>
    </div>
        </div>
      )
}
