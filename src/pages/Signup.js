
import React from 'react';
import { Button, Col, Container, Form, Image, Row } from 'react-bootstrap';



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

signUpInput = (nameOfInput,value) => {

    this.setState({
        [nameOfInput]: value
    })
    
}

userInfo = () => {
    const memberObj = {
        name: this.state.name,
        email: this.state.email,
        password: this.state.password,
        address: this.state.address,
        city: this.state.city,
    }
    this.props.addUser(memberObj)

    //empty inputs 
    this.setState({
        name: '',
        email: '',
        password: '',
        address: '',
        city: '',
    })

}



render(){
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
        <div>
            <h1 style={{margin: "50px 0 70px 0"}}>Enter Your Details</h1>
            {/* <Container> */}



            <Row >  
            <Col md={4} sm={12} lg={6}>
                <Form >
            <Form.Group controlId="formBasicEmail" style={{marginBottom: "10px"}}>
                <Form.Label style={{fontSize: "12px"}}>Name:</Form.Label>
                <Form.Control value={this.state.name} type="text" placeholder="Enter Name" onChange={(event) => {this.signUpInput('name',event.target.value)}}/>

            </Form.Group>
            <Form.Group controlId="formBasicEmail" style={{marginBottom: "10px"}}>
                <Form.Label style={{fontSize: "12px"}}>Email Address:</Form.Label>
                <Form.Control value={this.state.email} type="email" placeholder="Enter Email" onChange={(event) => {this.signUpInput('email',event.target.value)}}/>

            </Form.Group>  <Form.Group controlId="formBasicEmail" style={{marginBottom: "10px"}}>
                <Form.Label style={{fontSize: "12px"}}>Password:</Form.Label>
                <Form.Control value={this.state.password} type="Password" placeholder="Password" onChange={(event) => {this.signUpInput('password',event.target.value)}}/>

            </Form.Group>  <Form.Group controlId="formBasicEmail" style={{marginBottom: "10px"}}>
                <Form.Label style={{fontSize: "12px"}}>Address:</Form.Label>
                <Form.Control value={this.state.address} type="text" placeholder="Address" onChange={(event) => {this.signUpInput('address',event.target.value)}}/>

            </Form.Group>
            <Form.Group controlId="formBasicPassword" style={{marginBottom: "10px"}}>
                <Form.Label style={{fontSize: "12px"}}>City:</Form.Label>
                <Form.Control value={this.state.city} type="text" placeholder="City" onChange={(event) => {this.signUpInput('city',event.target.value)}}/>
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox" style={{marginBottom: "10px"}}>
            </Form.Group>
            <Button  style={{margin: "20px 0 20px 0"}} variant="primary" type="button" onClick={this.userInfo}>
                Submit
            </Button>
            </Form>
            </Col>
            <Col md={4} sm={12} lg={6}>
            <Image style={{width: "450px", borderRadius: "50px" }} src="https://i.pinimg.com/originals/84/ba/9e/84ba9e7f25805711179b64d2d623d1e0.jpg"  />
            {/* {allUsers} */}
            </Col>
            </Row>
            {/* </Container> */}
    </div>
    )
}


}

export default Signup