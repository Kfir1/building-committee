
import React from 'react';
import { Accordion, Card, Button } from 'react-bootstrap';
import IssuesList from './issuesList';



class CommitteeDashboard extends React.Component{
    constructor(props){
        super(props)
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
        editPriority= "";
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
          // conditional ternary on button to show button only by user id
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
           <h1>New Reported Issues</h1>
      <IssuesList allIssues={allIssuesJSX}></IssuesList>

        </div>
    )
}
    
}

export default CommitteeDashboard