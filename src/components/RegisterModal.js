import React, { Component } from 'react'
import { Form, Button, Header, Modal } from 'react-bootstrap'

class RegisterModal extends Component {
    state = {
        username: '', 
        password: '',
        email: '',
        location: '',
        specialty: '',
        type: '',
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        if (this.state.type === 'patient') {
            this.props.register({
                username: this.state.username.toLowerCase(),
                password: this.state.password,
                location: this.state.location,
                type: this.state.toLowerCase()
            })
        } else if (this.state.type === 'provider') {
            this.props.register({
                username: this.state.username.toLowerCase(),
                password: this.state.password,
                location: this.state.location,
                specialty: this.state.specialty.toLowerCase(),
                type: this.state.toLowerCase()
            })
        }
    }

    // register = async (info) => {
    //     const response = await fetch(`${process.env.REACT_APP_API_URL}/api/v1/register`, {
    //         method: 'POST',
    //         credentials: 'include',
    //         body: JSON.stringify(info),
    //         headers: {
    //             'Content-Type': 'application/json'
    //         }
    //     })
    //     const parsedRegisterResponse = await response.json()
    //     if (parsedRegisterResponse.status.code === 200) {
    //         this.props.login({id: parsedRegisterResponse.status.id, type: info.type, username: this.state.username})
    //     } else if (parsedRegisterResponse.status.code === 400) {
    //         this.setState({
    //             message: "This username or email is already taken"
    //         })
    //     }
    // }

render() {
    return (
        <Modal open={props.openModal} closeIcon onClose={props.closeModal}>
            <Header>Register</Header>
            <Modal.Content>
                <Form
                    size='large'
                    onSubmit={props.register}
                >
                    <Form.Field>
                        <label>Username</label>
                        <Form.Input 
                            type="text"  
                            name="username" 
                            value={this.state.username} 
                            onChange={this.handleChange}
                        />
                    </Form.Field>
                    <Form.Field>
                        <label>Email</label>
                        <Form.Input 
                            type="text"  
                            name="email" 
                            value={this.state.email} 
                            onChange={this.handleChange}
                        />
                    </Form.Field>
                    <Form.Field>
                        <label>Password</label>
                        <Form.Input 
                            type="text"  
                            name="password" 
                            value={this.state.password}
                            onChange={this.handleChange}
                        />
                    </Form.Field>
                    <Form.Field>
                        <label>Location</label>
                        <Form.Input 
                            type="text"  
                            name="location" 
                            value={this.state.location}
                            onChange={this.handleChange}
                        />
                    </Form.Field>
                    <Form.Field>
                        <label>Specialty</label>
                        <Form.Input 
                            type="text"  
                            name="specialty" 
                            value={this.state.specialty}
                            onChange={this.handleChange}
                        />
                    </Form.Field>
                    <ButtonToolbar>
                        <ToggleButtonGroup type="radio" name="type" value={this.state.type}>
                            <ToggleButton value="patient">Patient</ToggleButton>
                            <ToggleButton value="provider">Provider</ToggleButton>
                         </ToggleButtonGroup>
                    </ButtonToolbar>
                    <Button type='submit'>Submit</Button>
                </Form>
            </Modal.Content>
        </Modal>
        )
    }
}


export default RegisterModal
