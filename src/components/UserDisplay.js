import React, { Component } from 'react'
import HealthList from './HealthList'
import UpdateModal from './UpdateModal'
import { parse } from 'querystring'

class UserDisplay extends Component {
    constructor(props) {
        super()
        this.state = {
            username: '',
            email: '',
            password: '',
            location: '',
            specialty: '',
            issues: [],
            // health issue info should be loaded from HealthList ?  
            symptoms: '',
            diagnoses: '',          
        }
    }
    // method needed to access user data from back end & declare if provider or patient, then return that information to the component
    getUserData = async (loginType) => {
        const id = this.id
        if (loginType['data'] === 'patient') {
            const response = await fetch(`${process.env.REACT_APP_API_URL}/api/v1/patient/${id}`, {
                method: 'GET',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
        } else if (loginType['data'] === 'provider') {
            const response = await fetch(`${process.env.REACT_APP_API_URL}/api/v1/provider/${id}`, {
                method: 'GET',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
        // } else {
            const parsedLoginResponse = await response.json()
            if (parsedLoginResponse.status.code === 200) {
                this.setState({
                    username: parsedLoginResponse.data.username,
                    email: parsedLoginResponse.data.email,
                    location: parsedLoginResponse.data.location,
                    specialty: parsedLoginResponse.data.specialty
                })
            }
        }
    }

    render() {
    return (
        <div>
            <HealthList />
            <UpdateModal />
        </div>
    )
}
}

export default UserDisplay
