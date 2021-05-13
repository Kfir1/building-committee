
import React from 'react';
import { Accordion, Card, Button } from 'react-bootstrap';



class CommitteeDashboard extends React.Component{
    constructor(props){
        super(props)
    }


render(){
    return (
        <div>
           <h1>New Reported Issues</h1>
           <Accordion defaultActiveKey="0">
  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="0">
        Item One
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="0">
      <Card.Body>Hello! I'm the body</Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="1">
      Item Two
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="1">
      <Card.Body>Hello! I'm another body</Card.Body>
    </Accordion.Collapse>
  </Card>
</Accordion>
        </div>
    )
}
    
}

export default CommitteeDashboard