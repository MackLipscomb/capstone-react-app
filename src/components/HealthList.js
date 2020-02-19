import React, { Component }from 'react'
import { ListGroup } from 'react-bootstrap'

class HealthList extends Component {
    // constructor(props) {
    //     super()
    //     this.state = {
    //         issues: props.issues
    //     }
    // }

// getIssues = async (e) => {
//     const response = await fetch(`${process.env.REACT_APP_API_URL}/api/v1/health`, {
//         method: 'GET',
//         credentials: 'include',
//         headers: {
//             'Content-Type': 'application/json'
//         }
//     })
//     const parsedIssues = await response.json()
//     const parsedIssueData = parsedIssues.data
//     if (parsedIssues.status.code === 200) {
//         await this.setState({
//             issues: [...parsedIssueData]
//         })
//     } else {
//         console.log('fetch failed', parsedIssues)
//     }
// }

// componentDidMount = () => {
//     this.getIssues()
// }


render() {
    
    const listHealthIssues = () => {
        const issues = this.props.issues.map((issue) => {
            return (
                <ListGroup>
                  <ListGroup.Item>
                    {issue.symptoms}
                  </ListGroup.Item>
                  <ListGroup.Item>
                    {issue.diagnoses}
                  </ListGroup.Item>
                </ListGroup>
              );
        })
        return issues
    }


    return (
        <div>
            <ListGroup>
                {listHealthIssues()}
            </ListGroup>
        </div>
        )
    }
}
export default HealthList
