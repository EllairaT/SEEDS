import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { BrowserRouter } from 'react-router-dom'
import 'bootswatch/dist/minty/bootstrap.min.css'
import './style/index.css'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import rootReducers from './reducers/index.js'

//The store is the GLOBALISED state.
//this makes data available to every component, if they need it
const store = createStore(rootReducers, compose(applyMiddleware(thunk)))

//Action in redux describes what we want to do.

//Reducer describes how actions transform one state into another state

//DISPATCH executes the action (send action to reducer, reducer checks what to do, then the store gets updated)

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
