import React, { Component } from 'react'
import GoogleLogin from 'react-google-login'
import '../style/login.css'
import Button from 'react-bootstrap/Button'
import * as Icon from 'react-bootstrap-icons'

export class Google extends Component {
  state = {
    isLoggedIn: false,
    userID: '',
    name: '',
    email: '',
    picture: ''
  }

  responseGoogle = (response) => {
    console.log(response)
    console.log(response.profileObj)

    this.setState({
      isLoggedIn: true,
      userID: response.profileObj.userID,
      name: response.profileObj.name,
      email: response.profileObj.email,
      picture: response.profileObj.imageUrl
    })
  }
  render() {
    let googleCont

    if (this.state.isLoggedIn) {
      googleCont = (
        <div style={{ width: '400px', margin: 'auto', background: '#f4f4f4', padding: '20px' }}>
          <img src={this.state.picture} alt={this.state.name} />
          <h2>Welcome {this.state.name}</h2>
          Email: {this.state.email}
        </div>
      )
    } else {
      googleCont = (
        <GoogleLogin
          clientId={process.GOOGLE_ID}
          buttonText="Login with Google"
          onSuccess={this.responseGoogle}
          onFailure={this.responseGoogle}
          cookiePolicy={'single_host_origin'}
          icon={true}
          render={(renderProps) => (
            <Button
              onClick={renderProps.onClick}
              disabled={renderProps.disabled}
              className="Google"
              style={{ background: '#DB4437' }}
            >
              <Icon.Google className="mx-2" />
              Continue with Google
            </Button>
          )}
        />
      )
    }
    return <>{googleCont}</>
  }
}

export default Google
