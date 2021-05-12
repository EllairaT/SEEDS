import React, { Component } from 'react'
// import FacebookLogin from 'react-facebook-login'
import '../style/login.css'
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'
import Button from 'react-bootstrap/Button'
import * as Icon from 'react-bootstrap-icons'

export default class Facebook extends Component {
  state = {
    isLoggedIn: false,
    userID: '',
    name: '',
    email: '',
    picture: ''
  }

  responseFacebook = (response) => {
    this.setState({
      isLoggedIn: true,
      userID: response.userID,
      name: response.name,
      email: response.email,
      picture: response.picture.data.url
    })
  }

  componentClicked = () => {
    console.log('Facebook btn clicked')
  }

  handleFailure = () => {
    console.log('failed to login')
  }

  render() {
    let fbCont

    if (this.state.isLoggedIn) {
      fbCont = (
        <div style={{ width: '400px', margin: 'auto', background: '#f4f4f4', padding: '20px' }}>
          <img src={this.state.picture} alt={this.state.name} />
          <h2>Welcome {this.state.name}</h2>
          Email: {this.state.email}
        </div>
      )
    } else {
      fbCont = (
        <FacebookLogin
          appId="203256658124872"
          autoLoad={false}
          render={(renderProps) => (
            <Button onClick={renderProps.onClick} className="Facebook" style={{ background: '#4267b2' }}>
              <Icon.Facebook className="mx-2" />
              Continue with Facebook
            </Button>
          )}
          fields="name,email,picture"
          onClick={this.componentClicked}
          onFailure={this.handleFailure}
          callback={this.responseFacebook}
        />
      )
    }

    return <>{fbCont}</>
  }
}
