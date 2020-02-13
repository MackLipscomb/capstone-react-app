import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import ProviderHome from './screens/ProviderHome'
import ProviderLogin from './screens/ProviderLogin'
import PatientHome from './screens/PatientHome'
import PatientLogin from './screens/PatientLogin'
import Register from './screens/Register'
import Home from './screens/Home'

import HeaderNav from './components/webpage/Nav'
import Footer from './components/webpage/Footer'

import './styles/styles.css'

function App() {
  return (
      <Router>
          <HeaderNav />
              <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/register" component={Register}/>
                <Route path="/patient" component={PatientLogin}/>
                <Route path="/patient/:id" component={PatientHome}/>
                <Route path="/provider" component={ProviderLogin}/>
                <Route path="/provider/:id" component={ProviderHome}/>
              </Switch>
          <Footer />
      </Router>
  );
}

export default App

