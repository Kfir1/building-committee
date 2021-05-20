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
          isModalOpen: false,
          editId: -1,
          issueTitle: '',
          issueDescription: '',
          Title: '',
          Description: '',
          // default priority set to normal
          priority:'Normal',
          image: null,
          

          messageEditId: -1,
          messageTitle: "",
          messageDetails: "",
            // default priority set to Info
          messagePriority: "Info",
          messageImage: null,
        }
    }

    handleClose = () =>{
      this.setState({
          isModalOpen: false,
      })
    }

    
    saveModalInfoMessage = () => {
      let newMessage = {
        messageTitle: this.state.messageTitle,
        messageDetails: this.state.messageDetails,
        messagePriority: this.state.messagePriority,
        messageImage: this.state.messageImage,
        userId: this.props.activeUser.id,
      }
      // console.log(newMessage);
      const messageEditId = this.state.messageEditId;
      this.setState({
          isModalOpen: false,
          messageTitle: "",
          messageDetails: "",
          messagePriority: "Info",
          messageImage: "",  
      });
      
      // same for messages 
      if( newMessage.messageTitle &&  newMessage.messageDetails && newMessage.messagePriority){ 
        // passing editId to App.js
      this.props.addMessage(newMessage, messageEditId);
      }
    } 
    // pass id from remove issue to 
    removeMessage = (id) => {
      this.props.removeMessage(id);
    }

    saveModalInfo = () =>{
      
      let newIssue = {
        issueTitle: this.state.Title,
        description: this.state.Description,
        priority: this.state.priority,
        image: this.state.image,
        userId: this.props.activeUser.id,
      }

  
      const editId = this.state.editId;
      this.setState({
        isModalOpen: false,
        Title: "",
        Description: "",
        priority: "Normal",
        image: "",
       
      });


      //if: check if  newIssue.issueTitle  newIssue.description   newIssue.priority  exists
      if( newIssue.issueTitle &&  newIssue.description && newIssue.priority){ 
        // passing editId to App.js
      this.props.addIssue(newIssue, editId);
      }

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
      let editImage = "";
      let editCommitteeMemberComment = "";
      //check id received from map array. get issues by their id and 
      if (id > -1) {
        editDescription = this.props.allIssues[id].description;
        editTitle = this.props.allIssues[id].issueTitle;
        editPriority = this.props.allIssues[id].priority;
        editImage = this.props.allIssues[id].image;
        editCommitteeMemberComment = this.props.allIssues[id].editCommitteeMemberComment;
      // else leave vars empty
      } else {
        editDescription = "";
        editTitle = "";
        editPriority= this.state.priority;
        editImage = "";
        editCommitteeMemberComment = "";
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
         priority: editPriority,
         image: editImage,
         comment: editCommitteeMemberComment
       
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
        
        <img src={issue.image}/>
        
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
           ) :  undefined }
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
            {/* <Form.Group as={Row} > */}
                <Form.Label column sm={2}>
                Issue:
                </Form.Label>
                <Col sm={10} >
                    <Form.Control 
                    required={true}
                    type="text" 
                    placeholder= "Issue Title"
                     value={this.state.Title}
                     onChange={(event)=> {this.setState({Title: event.target.value})}}
                      />
                
                </Col>

                <Form.Label column sm={2}>
                Description:
                </Form.Label>
                <Col sm={10}>
                  <Form.Control  
                   required={true} 
                    type="text" 
                    placeholder="description"
                    value={this.state.Description}
                    onChange={(event)=> {this.setState({Description: event.target.value})}}
                  />
                </Col>
                <Form.Label column sm={2}>
                    Priority:
                </Form.Label>
                <Col sm={10}>
                <Form.Control required={true}  value={this.state.priority} as="select" custom   onChange={(event)=> {this.setState({priority: event.target.value})}}>
                    <option value="Normal">Normal</option>
                    <option value="Important">Important</option>
                    <option value="Urgent">Urgent</option>
                 </Form.Control>
                </Col>
                <Col sm={10}>
                <Form.Label column sm={2}>
                    Image:
                </Form.Label>
                <Form.Control  
                 value={this.state.image}
                 type="text"
                 onChange={(event)=> {this.setState({image: event.target.value})}}>
                 </Form.Control>
                </Col>
       
             
            
            {/* </Form.Group> */}
                                                
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




