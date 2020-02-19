import React, { Component } from 'react'
import { Form, Button, Container } from 'react-bootstrap'

class SignUp extends Component {
    state = {
        username: '',
        email: '',
        password: '',
        specialty: '',
        location: '',
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
            username,
            email,
            password,
            specialty,
            location,
            type
        } = this.state

        // destructure props
        const { register } = this.props

        // build new user object
        const registerInfo = {
            // username: username,
            // email: email,
            // password: password,
            // specialty: specialty,
            // location: location,
            // type: type
            username,
            email,
            password,
            specialty,
            location,
            type
        }

        // post new user to database
        register(registerInfo)
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
            username,
            email,
            password,
            specialty,
            location,
            type
        } = this.state

        if (type === 'Patient') {
            return (
                <Container>
                    <h1>Patient Sign Up</h1>
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

                        <Form.Group>
                            <Form.Label>Username</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Username"
                                name="username"
                                value={username}
                                onChange={this.handleChange}
                            />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Location</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Location"
                                name="location"
                                value={location}
                                onChange={this.handleChange}
                            />
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Sign Up
                        </Button>

                        <Button variant="secondary" onClick={this.switch}>
                            Not a patient? Register as a provider
                        </Button>
                    </Form>
                </Container>
            )
        }
        return (
            <Container>
                <h1>Provider Sign Up</h1>
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

                    <Form.Group>
                        <Form.Label>Username</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Username"
                            name="username"
                            value={username}
                            onChange={this.handleChange}
                        />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Specialty</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Specialty"
                            name="specialty"
                            value={specialty}
                            onChange={this.handleChange}
                        />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Location</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Location"
                            name="location"
                            value={location}
                            onChange={this.handleChange}
                        />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Sign Up
                    </Button>

                    <Button variant="secondary" onClick={this.switch}>
                        Not a provider? Register as a patient
                    </Button>
                </Form>
            </Container>
        )
    }
}

export default SignUp
