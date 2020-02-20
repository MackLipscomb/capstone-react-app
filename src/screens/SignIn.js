import React, { Component } from 'react'
import { Form, Button, Container } from 'react-bootstrap'

class SignIn extends Component {
    state = {
        email: '',
        password: '',
        type: 'Patient'
    }

    handleChange = e => {
        // destructure event
        const {
            name,
            value
        } = e.target

        // update state
        this.setState({ [name]: value })
    }

    handleSubmit = e => {
        // prevent page reload
        e.preventDefault()

        // destructure state
        const {
            email,
            password,
            type
        } = this.state

        // destructure props
        const { login } = this.props
        const history = this.props.props[0].history

        // build new user object
        const loginInfo = {
            // email: email,
            // password: password,
            // type: type
            email,
            password,
            type
        }

        // post new user to database
        login(loginInfo)

        if (type === 'Patient') {
            history.push('/patient')
        } else {
            history.push('/provider')
        }
    }

    switch = e => {
        // prevent default
        e.preventDefault()

        // destructure state
        const { type } = this.state

        // update state
        if (type === 'Patient') {
            this.setState({ type: 'Provider' })
        } else {
            this.setState({ type: 'Patient' })
        }
    }

    render() {
        // destructure state
        const {
            email,
            password,
            type
        } = this.state

        if (type === 'Patient') {
            return (
                <Container>
                    <h1>Patient Login</h1>
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Email"
                                name="email"
                                value={email}
                                onChange={this.handleChange}
                            />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Password"
                                name="password"
                                value={password}
                                onChange={this.handleChange}
                            />
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Sign In
                        </Button>

                        <Button variant="secondary" onClick={this.switch}>
                            Not a patient? Sign in as a provider
                        </Button>
                    </Form>
                </Container>
            )
        }
        return (
            <Container>
                <h1>Provider Login</h1>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group>
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="Email"
                            name="email"
                            value={email}
                            onChange={this.handleChange}
                        />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Password"
                            name="password"
                            value={password}
                            onChange={this.handleChange}
                        />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Sign In
                    </Button>

                    <Button variant="secondary" onClick={this.switch}>
                        Not a provider? Sign in as a patient
                    </Button>
                </Form>
            </Container>
        )
    }
}

export default SignIn
