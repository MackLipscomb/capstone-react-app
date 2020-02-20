import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import ProviderHome from './screens/ProviderHome'
import PatientHome from './screens/PatientHome'
import Home from './screens/Home'
import SignIn from './screens/SignIn'
import SignUp from './screens/SignUp'

import Nav from './components/Nav'

import './styles/styles.css'

class App extends Component {
  state = {
    patient: true,
    auth: false,
    authId: 0,
    username: ''
  }

  login = async (userCredentials) => {
    // login user
    console.log(userCredentials)
    const response = await fetch(`${process.env.REACT_APP_API_URL}/login`, {
      method: 'POST',
      credentials: 'include',
      body: JSON.stringify(userCredentials),
      headers: { 'Content-Type': 'application/json' }
    })
    console.log(response)
    const testParse = await response.json()
    const patient = testParse.data
    console.log(patient)
    // convert response to json
    // const json = await response.json();
    // console.log(json)

    // // login user and redirect if 200 status code
    // if (json.status.code === 200) {
    //     this.props.login(parsedRegisterResponse.data.email)
    //     this.props.history.push('/')
    // }

    // let isPatient = true;
    // let id = data['id']
    // if (data['type'] === "provider") {
    //   isPatient = false
    //   this.props.history.push(`/provider/${id}`)
    // } else if (data['type'] === 'patient') {
    //   this.props.history.push(`/patient/${id}`)
    // }
    // this.setState({
    //   auth: true,
    //   patient: isPatient,
    //   authID: id,
    //   username: data['username']
    // })
  }

  logout = async () => {
    // logout user
    const response = await fetch(`${process.env.REACT_APP_API_URL}/logout`, {
      method: 'GET',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      }
    })

    // convert response to json
    const json = await response.json()
    if (json.status.code === 200) {
      this.setState({
        auth: false,
        authId: 0
      })
    }

    this.props.history.push('/')
  }

  register = async (registerInfo) => {
    // post user data
    console.log(registerInfo)
    const response = await fetch(`${process.env.REACT_APP_API_URL}/register`, {
      method: 'POST',
      credentials: 'include',
      body: JSON.stringify(registerInfo),
      headers: { 'Content-Type': 'application/json' }
    })

    // convert response to json
    const json = await response.json();
    console.log(json)

    // // login user and redirect if 200 status code
    // if (json.status.code === 200) {
    //     this.props.login(json.data.email)
    //     this.props.history.push('/')
    // }
  }

  render() {
    // destructure state
    const { auth } = this.state

    return (
      <Router>
        <Nav
          auth={auth}
          logout={this.logout}
        />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/patient" component={PatientHome} />
          <Route path="/provider" component={ProviderHome} />
          <Route path="/sign-in" render={(...props) => <SignIn props={props} login={this.login} />} />
          <Route path="/sign-up" render={(...props) => <SignUp props={props} register={this.register} />} />
        </Switch>
      </Router>
    )
  }
}

export default App

