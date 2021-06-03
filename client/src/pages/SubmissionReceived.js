import React from 'react'
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

export default function SubmissionReceived() {

    return (
        <div>
            <div className="SubmissionReceived mt-5">
      <Container className="">
        <h4 className="float-left">Submission Received!</h4>
        <p>You will receive updates regarding the status of your article to the email provided.</p>

        <Card style={{ width: '18rem', border: 0 }} className="mx-auto">
          
          
        <p></p>
        <Button type="submit" href="../">Back to Home</Button>

          <span></span>
          <p></p>
          
        </Card>
      </Container>
    </div>
        </div>
      )
}
