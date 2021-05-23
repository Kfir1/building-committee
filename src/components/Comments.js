import React from 'react'
import { Accordion, Card, Button, Modal, Row, Col, Form } from 'react-bootstrap';


class Comments extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            comment: "",
            editId: -1, 
            isModalOpen: false,
        }
    }

    handleCloseComment() {
        this.setState({ isModalOpen: false });
    }

      // when open modal clicking add issue id will be -1
      openModal = (id) => {
        // if id (index from map) will not receive value (clicking add issue  onClick={this.openModal}) it will be equal to -1
        if ( typeof id === "undefined" ){
          id = -1;
        }
        // create empty strings variable
      // create empty strings variable
      let editComment = "";
        //check id received from map array. get issues by their id and 
        if (id > -1) {
            editComment = this.props.comments[id].comment;
        // else leave vars empty
      } else {
        editComment = "";
      }
    //change modal state to open it.
        this.setState({
        isModalOpen: true,
        })
        this.setState({
          editId: id,
          comment: editComment,
        });
      
      }
      saveModalInfo = () =>{
 
        let newComment = {
          userId: this.props.activeUser.id, 
          comment: this.state.comment,
        }
     
        const editId = this.state.editId;
        this.setState({
          isModalOpen: false,
          comment: "",
        });
  
        if( newComment.comment){ 
          // passing editId to App.js
          // console.log(newIssue,editId);
  
          this.props.addComment(this.props.issueId, newComment, editId);
        }
  
    }
    render(){
        let allComments = <div></div>;
        if(this.props.comments) {
            allComments = this.props.comments.map((comment) => { 
                return (<div>
                        <h6>Comment by: {this.props.getUserTitleByUserId(comment.userId)}</h6>
                        <p>{comment.comment}</p>
                        <Button onClick={() => { this.openModal(comment.id); }}>Edit</Button>
                </div>);
            });
        }
        return(

            <div>
                {
                    allComments
                }
               <Modal show={this.state.isModalOpen} onHide={this.handleCloseComment}>
                    <Modal.Header closeButton>
                    <Modal.Title>Add Comment</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                    {/* <Form.Group as={Row} > */}
                        <Form.Label column sm={2}>
                        Comment:
                        </Form.Label>
                        <Col sm={10} >
                            <Form.Control 
                            required={true}
                            type="text" 
                            placeholder= "Comment"
                            value={this.state.comment}
                            onChange={ (event) => { this.setState({comment: event.target.value})}}
                            />
                        </Col>
                    {/* </Form.Group> */}
                                                        
                    <Button variant="secondary" onClick={this.handleCloseComment}>
                        Close
                    </Button>
                    <Button style={{margin: "14px"}} variant="primary" onClick={() =>  {  this.saveComment() }}>   
                        Save Comment
                    </Button>
                    </Modal.Body>
                </Modal>

                    <Button style={{marginTop: "22px", marginBottom: "22px"}} variant="secondary" onClick={this.openModal} >
                        Add Comment
                    </Button>
            
            </div>
        )
    }
}


export default Comments