
import React from 'react';
import { Button, Form } from 'react-bootstrap';



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
                <Form>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Name</Form.Label>
                <Form.Control value={this.state.name} type="text" placeholder="Enter Name" onChange={(event) => {this.signUpInput('name',event.target.value)}}/>

            </Form.Group>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control value={this.state.email} type="email" placeholder="Enter Email" onChange={(event) => {this.signUpInput('email',event.target.value)}}/>

            </Form.Group>  <Form.Group controlId="formBasicEmail">
                <Form.Label>Password</Form.Label>
                <Form.Control value={this.state.password} type="Password" placeholder="Password" onChange={(event) => {this.signUpInput('password',event.target.value)}}/>

            </Form.Group>  <Form.Group controlId="formBasicEmail">
                <Form.Label>Address</Form.Label>
                <Form.Control value={this.state.address} type="text" placeholder="Address" onChange={(event) => {this.signUpInput('address',event.target.value)}}/>

            </Form.Group>
            <Form.Group controlId="formBasicPassword">
                <Form.Label>City</Form.Label>
                <Form.Control value={this.state.city} type="text" placeholder="City" onChange={(event) => {this.signUpInput('city',event.target.value)}}/>
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
            </Form.Group>
            <Button variant="primary" type="button" onClick={this.userInfo}>
                Submit
            </Button>
            </Form>
            {/* {allUsers} */}
    </div>
    )
}


}

export default Signup