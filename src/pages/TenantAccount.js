
import React from 'react';
import { Accordion, Button, Card, Col, Container, Form, Image, Row } from 'react-bootstrap';
import './Signup.css';

class TenantAccount extends React.Component{
    constructor(props){
    super(props)
    this.state = {
        name: '',
        email: '',
        password: 'abc',
        aptNumber:'',
    }
} 

//get the inputs. the parameters from inputs are (string, event.target.value)
tenantsAccountInput = (nameOfInput,value) => {

    this.setState({
        [nameOfInput]: value
    })
    
}

userInfo = () => {
    //create new object to of user 
    const memberObj = {
        name: this.state.name,
        email: this.state.email,
        password: this.state.password,
        aptNumber:this.state.aptNumber,

    }
   
    // check if inputs in obj not empty. if not add user in App
    if(memberObj.name !== "" && memberObj.email !== "" ){
        this.props.addUser(memberObj)
        this.setState({
            name: '',
            email: '',
            aptNumber:'',
        })
    }
    // add the obj to list in app
    else{
        alert("All Fields Required");
    }

    //empty inputs after sign up press
  

}



render(){
    // get the list of registered users
   const allUsers = this.props.allUsers.map((user,index)=>{
       return <Accordion defaultActiveKey="0">
         <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey={index+1}>
         Apartment Number: {user.aptNumber}
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey={index+1}>
      <Card.Body>
            <p>User Name: {user.name}</p>
           <p>Email: {user.email}</p>
           <p>Password: {user.password}</p>
           <p>Apartment Number: {user.aptNumber}</p>
    </Card.Body>
    </Accordion.Collapse>
  </Card>
</Accordion>
    
   });

    return(
        <div >
      
                <Form className="form">
                <h1 style={{margin: "0px 0 20px 0"}}>Tenants Account</h1>
            <Form.Group controlId="formBasicEmail" style={{marginBottom: "10px"}} >
                <Form.Label style={{fontSize: "15px"}}>Name:</Form.Label>
                <Form.Control value={this.state.name} type="text" placeholder="Enter Name" onChange={(event) => {this.tenantsAccountInput('name',event.target.value)}}/>

            </Form.Group>
            <Form.Group controlId="formBasicEmail" style={{marginBottom: "10px"}}>
                <Form.Label style={{fontSize: "15px"}}>Email Address:</Form.Label>
                <Form.Control value={this.state.email} type="email" placeholder="Enter Email" onChange={(event) => {this.tenantsAccountInput('email',event.target.value)}}/>

            {/* </Form.Group>  <Form.Group controlId="formBasicEmail" style={{marginBottom: "10px"}}>
                <Form.Label style={{fontSize: "15px"}}>Password:</Form.Label>
                <Form.Control value={this.state.password} type="Password" placeholder="Password" onChange={(event) => {this.signUpInput('password',event.target.value)}}/> */}

            </Form.Group>  <Form.Group controlId="formBasicEmail" style={{marginBottom: "10px"}}>
                <Form.Label style={{fontSize: "15px"}}>Apartment Number:</Form.Label>
                <Form.Control value={this.state.aptNumber} type="number" placeholder="Apartment Number" onChange={(event) => {this.tenantsAccountInput('aptNumber',event.target.value)}}/>

            </Form.Group>
 

            <Button className="btn-signup" style={{margin: "20px 0 20px 0"}} variant="primary" type="button" onClick={this.userInfo}>
               Create Account
            </Button>
            </Form>
      
            <div> { allUsers}</div>
    </div>
    )
}
}

export default TenantAccount