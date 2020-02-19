import React from 'react'
import UserDisplay from '../components/UserDisplay'
import HealthList from '../components/HealthList'

// provider home should have basic infomation from db
// provider home should have list of health issues linked from patient


function ProviderHome(props) {
    return (
        <div>
            <UserDisplay {...props}/>
        </div>
    )
}

export default ProviderHome
