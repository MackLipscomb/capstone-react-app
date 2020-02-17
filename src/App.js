import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import ProviderHome from './screens/ProviderHome'
import PatientHome from './screens/PatientHome'
import Home from './screens/Home'

import HeaderNav from './components/webpage/Nav'

import './styles/styles.css'

class App extends Component {
  constructor() {
    super()
      this.state = {
        patient: true,
        logged: false,
        loggedId: 0,
        username: ''
      }
  }

  login = async (data) => {
    let isPatient = true;
    let id = data['id']
    if (data['type'] === "patient") {
      isPatient = false
      this.props.history.push(`/patient/${id}`)
    }
    this.setState({
      logged: true,
      patient: isPatient,
      loggedID: id,
      username: data['username']
    })
  }

  logout = async() => {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/logout`, {
      method: 'GET',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const parsedLogoutResponse = await response.json()
    if (parsedLogoutResponse.status.code === 200) {
      this.setState({
        logged: false,
        loggedId: 0
      })
    }
    this.props.history.push('/')
  }


  render() {
  return (
      <Router>
          <HeaderNav />
              <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/patient/:id" component={PatientHome}/>
                <Route path="/provider/:id" component={ProviderHome}/>
              </Switch>
      </Router>
    )
  }
}

export default App

