import React from 'react'
import { Navbar, Nav, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function NavHeader(props) {
  // destructure props
  const {
    auth,
    logout
  } = props

  return (
    <Navbar bg="dark" variant="dark" sticky="top">
      <Navbar.Brand>
        <Link to="/">
          MedConnect
        </Link>
      </Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link>
          <Link to="/">
            Home
        </Link>
        </Nav.Link>
      </Nav>
      {
        auth ?
          <Button variant="primary" size="sm" onClick={logout}>
            Logout
          </Button>
          :
          <div>
            <Button variant="primary" size="sm">
              <Link to="/sign-up">
                Register
              </Link>
            </Button>
            <Button variant="primary" size="sm">
              <Link to="/sign-in">
                Login
              </Link>
            </Button>
          </div>
      }
    </Navbar>
  )
}

export default NavHeader
