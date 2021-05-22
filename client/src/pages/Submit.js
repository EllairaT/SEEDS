import React from 'react'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { EmailInput, PasswordInput, URLinput} from '../components/InputForms'


// import React, { useState, setState } from 'react'
// import Card from 'react-bootstrap/Card'
// import Button from 'react-bootstrap/Button'

export default function Submit() {
    return (
        <div>
            <h3>Submit an article to the SEEDS database</h3>
            <Container>

            </Container>
            <Container>
            <Card style={{ width: '18rem', border: 0 }} className="mx-auto">
                <Form>
                <Container>
                    <URLinput>

                    </URLinput>
      <Form.Control size="large" name="foo" placeholder="Article Title" />
    </Container>
          </Form>
          
          </Card>
        </Container>
        <span>Article submission Guidelines</span><br></br>
        <span>1. Submit only bibtex file format</span><br></br>
        <span>2. Not sure yet</span>
        </div>
        
            
    )
}
