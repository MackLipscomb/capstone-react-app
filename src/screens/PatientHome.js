import React, { Component } from 'react'
import UserDisplay from '../components/UserDisplay'
import HealthList from '../components/HealthList'
import UpdateModal from '../components/UpdateModal'
import { Button } from 'react-bootstrap'

// patient home should have UserDisplay with basic information
// patient home should have list of current health issues - clickable to update

function PatientHome(props) {


    return (
        <div>
            <UserDisplay {...props}/>
        </div>
    )
}


export default PatientHome
