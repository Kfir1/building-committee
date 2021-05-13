import { Nav, Navbar } from 'react-bootstrap';
import React from 'react'



class VaadNavbar extends React.Component{
    constructor(props){
        super(props);
    }


render(){
 
    return(
        
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="/#/">LOGO</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
                <Nav.Link href="/#/">Home</Nav.Link>
            </Nav>
            <Nav className="ml-auto">
                 <Nav.Link href="/#/login">Login</Nav.Link>
                <Nav.Link href="/#/Signup">Signup</Nav.Link> 
            </Nav>
                
            </Navbar.Collapse>
      </Navbar>
    )
}

}


export default VaadNavbar