import React, { Component } from 'react'
import HealthList from './HealthList'
import UpdateModal from './UpdateModal'
import { ListGroup, Button } from 'react-bootstrap'


class UserDisplay extends Component {
    state = {
        username: '',
        email: '',
        password: '',
        location: '',
        specialty: '',
        issues: [],
        updateModalOpen: false,
        // health issue info should be loaded from HealthList ?  
        symptoms: '',
        diagnoses: '',
        issueToEdit: {
            symptoms: '',
            diagnoses: ''
        }          
    }
    // method needed to access user data from back end & declare if provider or patient, then return that information to the component
    // getUserData = async (loginType) => {
    //     const id = this.id
    //     if (loginType['data'] === 'patient') {
    //         const response = await fetch(`${process.env.REACT_APP_API_URL}/api/v1/patient/${id}`, {
    //             method: 'GET',
    //             credentials: 'include',
    //             headers: {
    //                 'Content-Type': 'application/json'
    //             }
    //         })
    //     } else if (loginType['data'] === 'provider') {
    //         const response = await fetch(`${process.env.REACT_APP_API_URL}/api/v1/provider/${id}`, {
    //             method: 'GET',
    //             credentials: 'include',
    //             headers: {
    //                 'Content-Type': 'application/json'
    //             }
    //         })
    //     // } else {
    //         const parsedLoginResponse = await response.json()
    //         if (parsedLoginResponse.status.code === 200) {
    //             this.setState({
    //                 username: parsedLoginResponse.data.username,
    //                 email: parsedLoginResponse.data.email,
    //                 location: parsedLoginResponse.data.location,
    //                 specialty: parsedLoginResponse.data.specialty
    //             })
    //         }
    //     } 

        createIssue = () => {
            this.setState({
                updateModalOpen: true
            })
        }

        addIssue = async (e, issueFromTheModal) => {
            e.preventDefault()
            try {
                const createdIssueResponse = await fetch(`${process.env.REACT_APP_API_URL}/health`, {
                    method: 'POST',
                    body: JSON.stringify(issueFromTheModal),
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    credentials: 'include'
                })
                const parsedResponse = await createdIssueResponse.json()
                this.setState({
                    issues: [...this.state.issues, parsedResponse.data]
                })
                this.closeUpdateModal()
            } catch (err) {
                console.log('error: ', err)
            }
        }

        closeUpdateModal = () => {
            this.setState({
                updateModalOpen: false
            })
        }


        componentDidMount=()=>{
            this.getIssues();
        }

        getIssues = async (e) => {
            const response = await fetch(`${process.env.REACT_APP_API_URL}/api/v1/health/`, {
                method: 'GET',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            const parsedIssues = await response.json()
            console.log(parsedIssues)
            const parsedIssuesData = parsedIssues.data
            
            const patientIssues = parsedIssuesData.filter((issue) => {
                if (issue['patient_username'] === this.state.username) {
                    return issue
                }
            })

            this.setState({
                issues: [...parsedIssuesData]
            })
        }

        editIssue = (idOfIssueToEdit) => {
            const issueToEdit = this.state.issues.find(issue => issue.id === idOfIssueToEdit)
            this.setState({
                updateModalOpen: true,
                issueToEdit: {
                    ...issueToEdit
                }
            })
        }

        handleEditChange = (e) => {
            this.setState({
                issueToEdit: {
                    ...this.state.issueToEdit,
                    [e.target.name]: e.target.value
                }
            })
        }
        
        updateIssues = async (e) => {
            e.preventDefault()
            try {
                const updateResponse = await fetch(`${process.env.REACT_APP_API_URL}/health/${this.state.issueToEdit.id}`, {
                    method: 'PUT',
                    body: JSON.stringify(this.state.issueToEdit),
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    credentials: 'include'
                })
                const updateResponseParsed = await updateResponse.json()
                const newIssueArrayWithUpdate = this.state.issues.map((issue) => {
                    if (issue.id === updateResponseParsed.data.id) {
                        issue = updateResponseParsed.data
                    }
                    return issue
                })
                this.setState({
                    issues: newIssueArrayWithUpdate
                })
                this.closeEditModal()
            } catch (err) {
                console.log(err)
            }
        }
        
        closeEditModal = () => {
            this.setState({
                updateModalOpen: false
            })
        }
        
        deleteIssue = async (id) => {
            const response = await fetch(`${process.env.REACT_APP_API_URL}/health/${id}`, {
                method: 'DELETE',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            const parsedResponse = await response.json()
            if (parsedResponse.status.code === 200) {
                console.log(parsedResponse)
            } else {
                console.log('delete failed:', parsedResponse)
            }
            // this.getIssues()
            // use react router to get the new 'home'/list component
        }


        render() {
            return (
                <>
            <HealthList issues={this.state.issues}/>
            

            <Button variant="primary">Click to Add or Update Health Issues
            </Button> 
            

        </>
        )
    }
}

export default UserDisplay
