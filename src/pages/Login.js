import React from 'react';
import { Button, Col, Container, Form, Image, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Login.css';




class Login extends React.Component{
    constructor(props){
    super(props)
    this.state = {
        email: '',
        password:''
    }
}

updatePass = (event) => {
    this.setState({
        password: event.target.value
    })
}
updateEmail = (event) => {
    this.setState({
        email: event.target.value
    })
}
handleLogin = () => {

    const foundUser = this.props.allUsers.find( (user) => {
        return user.email === this.state.email && user.password === this.state.password;
    });

    if(foundUser) {
        this.props.login(foundUser);
        window.location.href = '#/dashboard';
    }
    else{
        alert(" Incorrect Email or Password");
    }
}
render(){
    return(
        <div className="p-login" >
        
      {/* <Container sm={6} md={4} lg={3} className="img-login">  */}
     
           {/* <Image  style={{width: "10%", height: "100%", opacity: "0.5"}} src="https://thumbs.dreamstime.com/b/nice-modern-apartment-buildings-city-40803762.jpg"></Image> */}
        <Form className="mt-5 form">
        <h1 >Login</h1>
        <Form.Group style={{marginBottom: "11px"}}  controlId="formHorizontalEmail" >
            <Form.Label column sm={2}>
            Email:
            </Form.Label>
            {/* <Col sm={10}> */}
            <Form.Control  type="email" placeholder="Email" name="email" onChange={this.updateEmail} value={this.state.email}/>
            {/* </Col> */}
        </Form.Group>

        <Form.Group style={{marginBottom: "22px"}} controlId="formHorizontalPassword">
            <Form.Label column sm={2}>
            Password:
            </Form.Label>
            {/* <Col sm={10}> */}
            <Form.Control type="password" placeholder="Password" name="password" onChange={this.updatePass} value={this.state.password}/>
            {/* </Col> */}
        </Form.Group>
       
        {/* <Form.Group> */}
            {/* <Col sm={{ span: 100, offset: 0 }}> */}
            <Button className="btn-login" onClick={this.handleLogin} variant="success" type="button">
                Log in
            </Button>
            {/* </Col> */}
        {/* </Form.Group> */}
        </Form>
        {/* </Container> */}
        {/* <Link style={{marginBottom: "11px"}} to="/signup">Sign up</Link> */}
    </div>
    )
}


}

export default Login



