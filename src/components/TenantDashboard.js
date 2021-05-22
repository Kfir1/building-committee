import './tenantDashboard.css';
import React from 'react';
import { Accordion, Card, Button, Modal, Row, Col, Form } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.css';
import IssuesList from './IssuesList';
import MessagesList from './MessagesList'
import AddIssue from './addIssue';



class TenantDashboard extends React.Component{
    constructor(props){
        super(props)
        this.state = {
          // show: false,
          isModalOpen: false,
          editId: -1,
          // issueTitle: '',
          // issueDescription: '',
          Title: '',
          Description: '',
          // default priority set to normal
          priority:'Normal',
          image: null,
          

          isModalOpenMessages: false,
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
    handleCloseMessages = () =>{
      this.setState({
        isModalOpenMessages: false,
      })
    }

   //have to use different functions for modal. one for issue and one for message
    saveModalInfoMessage = () => {
      let newMessage = {
        title: this.state.messageTitle,
        details: this.state.messageDetails,
        priority: this.state.messagePriority,
        image: this.state.messageImage,
        userId: this.props.activeUser.id,
      }
      // console.log(newMessage);
      const messageEditId = this.state.messageEditId;
      this.setState({
        isModalOpenMessages: false,
          messageTitle: "",
          messageDetails: "",
          messagePriority: "Info",
          messageImage: "",  
      });
      
      // same for messages 
      if( newMessage.title &&  newMessage.details && newMessage.priority){ 
        // passing editId to App.js
        console.log(newMessage);
      this.props.addMessage(newMessage, messageEditId);
      }
    } 
    // pass id from removeMessage  to App
    removeMessage = (id) => {
      this.props.removeMessage(id);
    }

    saveModalInfo = () =>{
      //json keys: current state value in component
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
      if( newIssue.issueTitle &&  newIssue.description){ 
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
      //check id received from map array. get issues by their id 
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

     

    // when open modal clicking add issue id will be -1
    openModalMessage = (id) => {
      // if id (index from map) will not receive value (clicking add issue  onClick={this.openModal}) it will be equal to -1
      if ( typeof id === "undefined" ){
        id = -1;
      }

        // create empty strings variable
        let editMessageDetails = "";
        let editMessageTitle = "";
        let editMessagePriority = "";
        let editMessageImage = "";
       
        //check id received from map array. get issues by their id and 
        if (id > -1) {
          editMessageDetails = this.props.allMessages[id].details;
          editMessageTitle = this.props.allMessages[id].title;
          editMessagePriority = this.props.allMessages[id].priority;
          editMessageImage = this.props.allMessages[id].image;
  
        // else leave vars empty
        } else {
          editMessageDetails = "";
          editMessageTitle = "";
          editMessagePriority= this.state.messagePriority;
          editMessageImage = "";
     
        }
       //change modal state to open it.
          this.setState({
            isModalOpenMessages: true,
          })
    // update state and edit existing message

        this.setState({
          messageEditId: id,
          messageTitle: editMessageTitle,
          messageDetails: editMessageDetails,
          messagePriority: editMessagePriority,
          messageImage: editMessageImage,
         
        });
    }

    
render(){
  // get the name of activeUser to show as h1
    const activeUser = this.props.activeUser.name;
// map to get the list of all issues
    const allIssuesJSX = this.props.allIssues.map((issue,index) => {
        return (
          // id from  issues json object
            <Card key={issue.id}>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="1">
        {   issue.issueTitle  }   
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="1">
      <Card.Body>
        
        <p>Description: {issue.description}</p> 
        
        <p>Priority: {issue.priority}</p>
        
        <img src={issue.image}/>
        
        { (issue.userId === this.props.activeUser.id) ? ( 
          <div>
        <Button 
        className="btn-tenant-dash"
        style={{float:"right", cursor:"pointer"}}
        onClick={() => this.openModal(index)}>
          Edit
        </Button>
        <Button
        className="btn-tenant-dash"
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
console.log(this.props.allMessages);
    const allMessagesJSX = this.props.allMessages.map((message,index) => {
      return (
        // id from  issues json object
          <Card key={message.id}>
  <Card.Header>
    <Accordion.Toggle as={Button} variant="link" eventKey="1">
      {   message.title  }   
    </Accordion.Toggle>
  </Card.Header>
  <Accordion.Collapse eventKey="1">
    <Card.Body>
      
      <p>Details: {message.details}</p> 
      
      <p>Priority: {message.priority}</p>
      
      <img src={message.image}/>
      
      { (message.userId === this.props.activeUser.id) ? ( 
        <div>
      <Button
      className="btn-tenant-dash"
      style={{float:"right", cursor:"pointer"}}
      onClick={() => this.openModalMessage(index)}>
        Edit
      </Button>
      <Button
      className="btn-tenant-dash"
      variant="danger"
      style={{float:"right", cursor:"pointer"}}
      onClick={() => { this.removeMessage(index) }}>
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
        <div className="tenant-frame"> 
         <h1> {activeUser} </h1>
         <h2>Issues</h2>
      
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
                <Form.Control 
                required={true}
                  value={this.state.priority}
                   as="select" custom
                   onChange={(event)=> {this.setState({priority: event.target.value})}}>
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
            <Button style={{marginTop: "22px", marginBottom: "22px"}} variant="secondary" onClick={() => { this.openModal() } } >
                Add Issue
            </Button>
     

          {/* optional to render. from another compo */}
            {/* <AddIssue             
              allIssues={this.props.allIssues}
              addIssue={this.props.addIssue}
              removeIssue={this.props.removeIssue}
              activeUser={this.props.activeUser}
              allMessages={this.props.allMessages}
              addMessage={this.props.addMessage}
              removeMessage={this.props.removeMessage}
            >
            </AddIssue>
 */}



                      <h1> {activeUser} </h1>
                       <h2>Messages</h2>
      
                 <MessagesList allMessages={allMessagesJSX}></MessagesList>

        <Modal show={this.state.isModalOpenMessages} onHide={this.handleCloseMessages}>
            <Modal.Header closeButton>
            <Modal.Title>{this.state.messageEditId > -1 ? `Edit Message #${this.state.messageEditId +1 }` : "Add Message"}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
        
                <Form.Label column sm={2}>
                Issue:
                </Form.Label>
                <Col sm={10} >
                    <Form.Control 
                    required={true}
                    type="text" 
                    placeholder= "Message Title"
                     value={this.state.messageTitle}
                     onChange={(event)=> {this.setState({messageTitle: event.target.value})}}
                      />
                </Col>
                <Form.Label column sm={2}>
                  Details:
                </Form.Label>
                <Col sm={10}>
                  <Form.Control  
                   required={true} 
                    type="text" 
                    placeholder="Details"
                    value={this.state.messageDetails}
                    onChange={(event)=> {this.setState({messageDetails: event.target.value})}}
                  />
                </Col>
                <Form.Label column sm={2}>
                    Priority:
                </Form.Label>
                <Col sm={10}>
                <Form.Control required={true}  value={this.state.messagePriority} as="select" custom   onChange={(event)=> {this.setState({messagePriority: event.target.value})}}>
                    <option value="Info">Info</option>
                    <option value="Important">Important</option>
                 </Form.Control>
                </Col>
                <Col sm={10}>
                <Form.Label column sm={2}>
                    Image:
                </Form.Label>
                <Form.Control  
                 value={this.state.messageImage}
                 type="text"
                 onChange={(event)=> {this.setState({messageImage: event.target.value})}}>
                 </Form.Control>
                </Col>
       
             
            
    
                                                
            <Button variant="secondary" onClick={this.handleCloseMessages}>
                Close
            </Button>
            <Button style={{margin: "14px"}} variant="primary" onClick={() =>  {  this.saveModalInfoMessage() }}>
                Save Changes
            </Button>
            </Modal.Body>
        </Modal>
            <Button style={{marginTop: "22px", marginBottom: "22px"}} variant="secondary" onClick={this.openModalMessage} >
                Add Message
            </Button>
     
        </div>
    )
}

}

export default TenantDashboard




