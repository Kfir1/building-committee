import './tenantDashboard.css';
import React from 'react';
import { Accordion, Card, Button, Modal, Row, Col, Form } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.css';
import IssuesList from './issuesList';

class TenantDashboard extends React.Component{
    constructor(props){
        super(props)
        this.state = {
          show: false,
          // newTenantIssue: issueInfo
          isModalOpen: false,
          editId: -1,
          issueTitle: '',
          issueDescription: '',
          Title: '',
          Description: '',
          priority:'Normal'
        }
    }

    handleClose = () =>{
      this.setState({
          isModalOpen: false,
      })
    }

    
    saveModalInfo = () =>{
      
      let newIssue = {
        issueTitle: this.state.Title,
        description: this.state.Description,
        priority: this.state.priority,
        userId: this.props.activeUser.id,
      }
      const editId = this.state.editId;
      this.setState({
        isModalOpen: false,
        Title: "",
        Description: "",
        priority: "",
        // editId: -1,
      });

      // passing editId to App.js
      this.props.addIssue(newIssue, editId);
      
      // this.setState({
      //   isModalOpen: true,
      // })
      // if(this.state.editId > 0 ) 
      // {
      //   this.props.addIssue(newIssue, this.state.editId);
      // } else {
      //   this.props.addIssue(newIssue);
      // }
      // this.setState({isModalOpen: false});
    }
    
    // pass id from remove issue to 
    removeIssue = (id) => {
      this.props.removeIssue(id);
    }

    // when open modal clicking add issue id will be -1
    openModal = (id) => {
      // if id (index from map) will not receive value (clicking add issue  onClick={this.openModal}) it will be equal to -1
      if ( typeof id === "undefined" ){
        id = -1;
      }
      // create empty strings variable
      let editDescription = "";
      let editTitle = "";
      let editPriority = "";
      //check id received from map array. get issues by their id and 
      if (id > -1) {
        editDescription = this.props.allIssues[id].description;
        editTitle = this.props.allIssues[id].issueTitle;
        editPriority = this.props.allIssues[id].priority;
      // else leave vars empty
      } else {
        editDescription = "";
        editTitle = "";
        editPriority= this.state.priority;
      }
     //change modal state to open it.
        this.setState({
          isModalOpen: true,
        })
  // update state and edit existing issues
      console.log("this is the title:", editTitle);
      this.setState({
         editId: id,
         Title: editTitle,
         Description: editDescription,
         priority: editPriority
         
      });
    
    }
    
render(){
  // get the name of activeUser to show as h1
    const activeUser = this.props.activeUser.name;

    const allIssuesJSX = this.props.allIssues.map((issue,index) => {
        return (
          // id from  issues json object
            <Card key={issue.id}>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="0">
        {   issue.issueTitle  }   
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="0">
      <Card.Body>
        
        <p>Description: {issue.description}</p> 
        
        <p>Priority: {issue.priority}</p>
        
        { (issue.userId === this.props.activeUser.id) ? ( 
          <div>
        <Button
        style={{float:"right", cursor:"pointer"}}
        onClick={() => this.openModal(index)}>
          Edit
        </Button>
        <Button
        variant="danger"
        style={{float:"right", cursor:"pointer"}}
        onClick={() => {   this.removeIssue(index); }}>
          Remove
        </Button>
        </div>
           ) :  undefined}
      </Card.Body>
    </Accordion.Collapse>
         </Card>
         
        )
    } )

  
    return (
        <div>
         <h1> {activeUser} </h1>
         <h2>Reported Issues</h2>
      
                 <IssuesList allIssues={allIssuesJSX}></IssuesList>
        <Modal show={this.state.isModalOpen} onHide={this.handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>{this.state.editId > -1 ? `Edit Issue #${this.state.editId +1 }` : "Add Issue"}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <Form.Group as={Row} >
                <Form.Label column sm={2}>
                Issue:
                </Form.Label>
                <Col sm={10} style={{paddingLeft: "24px"}}>
                    <Form.Control 
                    type="text" 
                    placeholder= "Issue Title"
                     value={this.state.Title}
                     onChange={(event)=> {this.setState({Title: event.target.value})}}
                      />
                
                </Col>

                <Form.Label column sm={2}>
                Description:
                </Form.Label>
                <Col sm={10} style={{paddingLeft: "24px"}}>
                  <Form.Control type="text" placeholder="description"
                    value={this.state.Description}
                    onChange={(event)=> {this.setState({Description: event.target.value})}}
                  />
                </Col>
                <Form.Label column sm={2}>
                    Priority:
                </Form.Label>
                <Col sm={10}>
                <Form.Control value={this.state.priority} as="select" custom   onChange={(event)=> {this.setState({priority: event.target.value})}}>
                    <option value="Normal">Normal</option>
                    <option value="Important">Important</option>
                    <option value="Urgent">Urgent</option>
                 </Form.Control>
                </Col>
             

            </Form.Group>
                                                
            <Button variant="secondary" onClick={this.handleClose}>
                Close
            </Button>
            <Button style={{margin: "14px"}} variant="primary" onClick={() =>  {  this.saveModalInfo() }}>
                Save Changes
            </Button>
            </Modal.Body>
        </Modal>
            <Button style={{marginTop: "22px", marginBottom: "22px"}} variant="secondary" onClick={this.openModal} >
                Add Issue
            </Button>
     
        </div>
    )
}

}

export default TenantDashboard




