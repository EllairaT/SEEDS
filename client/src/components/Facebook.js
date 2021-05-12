// import React from 'react'
// import FacebookLogin from 'react-facebook-login'

// export function Facebook() {
//   const state = {
//     isLoggedIn: false,
//     size: 'small',
//     userID: '',
//     name: '',
//     email: '',
//     icon: ''
//   }

//   const responseFacebook = (response) => {
//     console.log(response)
//     if (response.status !== 'unknown')
//       this.setState({
//         auth: true,
//         name: response.name,
//         picture: response.picture.data.url
//       })
//   }

//   const componentClicked = () => console.log()

//   let fbCont

//   if (state.isLoggedIn) {
//     fbCont = null
//   } else {
//     console.log('attempting login')
//     fbCont = (
//       <FacebookLogin
//         appID="203256658124872"
//         autoload={true}
//         fields="name,email,picture"
//         onClick={componentClicked}
//         calback={responseFacebook}
//       />
//     )
//   }

//   return <div>{fbCont}</div>
// }
import React, { Component } from 'react'
import FacebookLogin from 'react-facebook-login'

export default class Facebook extends Component {
  state = {
    auth: false,
    name: '',
    picture: ''
  }

  responseFacebook = (response) => {
    console.log(response)
    if (response.status !== 'unknown')
      this.setState({
        auth: true,
        name: response.name,
        picture: response.picture.data.url
      })
  }

  componentClicked = () => {
    console.log('Facebook btn clicked')
  }

  render() {
    let fbContent

    if (this.state.isLoggedIn) {
      fbContent = (
        <div
          style={{
            width: '400px',
            margin: 'auto',
            background: '#f4f4f4',
            padding: '20px'
          }}
        >
          <img src={this.state.picture} alt={this.state.name} />
          <h2>Welcome {this.state.name}</h2>
          Email: {this.state.email}
        </div>
      )
    } else {
      fbContent = (
        <FacebookLogin
          appId="203256658124872"
          autoLoad={true}
          fields="name,email,picture"
          onClick={this.componentClicked}
          callback={this.responseFacebook}
        />
      )
    }

    return <div>{fbContent}</div>
  }
}
