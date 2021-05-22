
import React from 'react';


class AddIssue extends React.Component{
    constructor(props){
        super(props)
        this.state = {
          isModalOpen: false,
          editId: -1,
          issueTitle: '',
          issueDescription: '',
          Title: '',
          Description: '',
          // default priority set to normal
          priority:'Normal',
          image: null,
        }
    }


    handleClose = () =>{
      this.setState({
          isModalOpen: false,
      })
    }
 
    saveModalInfo = () =>{
      debugger
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

     
      //if: check if  newIssue.issueTitle  newIssue.description   newIssue.priority  exists
      if( newIssue.issueTitle &&  newIssue.description && newIssue.priority){ 
        // passing editId to App.js
      this.props.addIssue(newIssue, editId);
      }

    }

    
render(){

    return (
        <div> 
    
        </div>
    )
}

}

export default AddIssue




