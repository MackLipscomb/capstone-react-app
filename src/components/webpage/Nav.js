import React from 'react'
import { Navbar, Nav, Button } from 'react-bootstrap'

function HeaderNav() {
    return (
  <Navbar bg="dark" variant="dark" sticky="top">
    <Navbar.Brand href="#home">MedConnect</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Provider</Nav.Link>
    </Nav>
    <Button variant="primary" size="sm" href="#register">Register</Button>
  </Navbar>
    )
}

export default HeaderNav
