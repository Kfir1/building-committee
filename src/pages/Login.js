import React from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';





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
updateEmail = (event) =>{
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
        window.location.href = '/#/dashboard';
    }
    else{
        alert(" Incorrect Email or Password");
    }
}
render(){
    return(
        <div className="p-login">
        <h1>Create a Committe Member Account</h1>
        <Form className="mt-5">
        <Form.Group as={Row} controlId="formHorizontalEmail" >
            <Form.Label column sm={2}>
            Email
            </Form.Label>
            <Col sm={10}>
            <Form.Control type="email" placeholder="Email" name="email" onChange={this.updateEmail} value={this.state.email}/>
            </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="formHorizontalPassword">
            <Form.Label column sm={2}>
            Password
            </Form.Label>
            <Col sm={10}>
            <Form.Control type="password" placeholder="Password" name="password" onChange={this.updatePass} value={this.state.password}/>
            </Col>
        </Form.Group>
       
        <Form.Group as={Row}>
            <Col sm={{ span: 10, offset: 2 }}>
            <Button onClick={this.handleLogin} variant="success" type="button">Log in</Button>
            </Col>
        </Form.Group>
        </Form>
        <Link to="/signup">Sign up</Link>
    </div>
    )
}


}

export default Login