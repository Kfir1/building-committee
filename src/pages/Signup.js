
import React from 'react';
import { Button, Col, Container, Form, Image, Row } from 'react-bootstrap';
import './Signup.css';

class Signup extends React.Component{
    constructor(props){
    super(props)
    this.state = {
        name: '',
        email: '',
        password: '',
        address: '',
        city: '',
    }
} 

//get the inputs. the parameters from inputs are (string, event.target.value)
signUpInput = (nameOfInput,value) => {

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
        address: this.state.address,
        city: this.state.city,
    }
    
    // check if inputs in obj not empty. if not add user in App
    if(memberObj.name !== "" && memberObj.email !== "" && memberObj.password !== "" && memberObj.address !== "" && memberObj.city !== ""  ){
        this.props.addUser(memberObj)
    }
    // add the obj to list in app
    else{
        alert("All Fields Required");
    }

    //empty inputs after sign up press
    this.setState({
        name: '',
        email: '',
        password: '',
        address: '',
        city: '',
    })

}



render(){
    //get the list of registered users
//    const allUsers = this.props.allUsers.map((user)=>{
//        return <tr>
//            <td>{user.name}</td>
//            <td>{user.email}</td>
//            <td>{user.password}</td>
//            <td>{user.address}</td>
//            <td>{user.city}</td>
//        </tr>
//    });

    return(
        <div className="background">
            {/* <Container   md={4} sm={12} lg={6}> */}
            {/* <Row >   */}
            {/* <Col md={4} sm={12} lg={6}> */}
                <Form className="form" style={{backgroundColor: "skyblue"}} style={{paddingTop: "40px"}}>
                <h1 style={{margin: "0px 0 20px 0"}}>Sign Up</h1>
            <Form.Group controlId="formBasicEmail" style={{marginBottom: "10px"}} >
                <Form.Label style={{fontSize: "15px"}}>Name:</Form.Label>
                <Form.Control value={this.state.name} type="text" placeholder="Enter Name" onChange={(event) => {this.signUpInput('name',event.target.value)}}/>

            </Form.Group>
            <Form.Group controlId="formBasicEmail" style={{marginBottom: "10px"}}>
                <Form.Label style={{fontSize: "15px"}}>Email Address:</Form.Label>
                <Form.Control value={this.state.email} type="email" placeholder="Enter Email" onChange={(event) => {this.signUpInput('email',event.target.value)}}/>

            </Form.Group>  <Form.Group controlId="formBasicEmail" style={{marginBottom: "10px"}}>
                <Form.Label style={{fontSize: "15px"}}>Password:</Form.Label>
                <Form.Control value={this.state.password} type="Password" placeholder="Password" onChange={(event) => {this.signUpInput('password',event.target.value)}}/>

            </Form.Group>  <Form.Group controlId="formBasicEmail" style={{marginBottom: "10px"}}>
                <Form.Label style={{fontSize: "15px"}}>Address:</Form.Label>
                <Form.Control value={this.state.address} type="text" placeholder="Address" onChange={(event) => {this.signUpInput('address',event.target.value)}}/>

            </Form.Group>
            <Form.Group controlId="formBasicPassword" style={{marginBottom: "10px"}}>
                <Form.Label style={{fontSize: "15px"}}>City:</Form.Label>
                <Form.Control value={this.state.city} type="text" placeholder="City" onChange={(event) => {this.signUpInput('city',event.target.value)}}/>
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox" style={{marginBottom: "10px"}}>
            </Form.Group>
            <Button className="btn-signup" style={{margin: "20px 0 20px 0"}} variant="primary" type="button" onClick={this.userInfo}>
                Sign Up
            </Button>
            </Form>
            {/* </Col> */}
            {/* <Col md={6} sm={12} lg={6}> */}
            {/* <Image  style={{ width: "100%", borderRadius: "50px", paddingLeft: "10px", margin: "20px auto 20px auto"}} src="https://i.pinimg.com/originals/84/ba/9e/84ba9e7f25805711179b64d2d623d1e0.jpg"  /> */}
           
            {/* </Col> */}
            {/* </Row> */}
            {/* </Container> */}
            {/* <div> { {allUsers} }</div> */}
    </div>
    )
}
}

export default Signup