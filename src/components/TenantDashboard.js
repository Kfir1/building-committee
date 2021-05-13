
import React from 'react';
import { Accordion, Card, Button } from 'react-bootstrap';



class TenantDashboard extends React.Component{
    constructor(props){
        super(props)
    }


render(){
    const allIssuesJSX = this.props.allIssues.map((issue,index) => {
        return (
            <Card key={index}>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="0">
        {   issue.issueTitle  }
           
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="0">
      <Card.Body>{issue.description}</Card.Body>
    </Accordion.Collapse>
         </Card>
        )
    } )
    return (
        <div>
         <h1>New Reported Issues</h1>
           <Accordion defaultActiveKey="0">
          {allIssuesJSX}
        </Accordion>
        </div>
    )
}
    

}

export default TenantDashboard