import { Container, Image, Nav, Navbar } from 'react-bootstrap';
import React from 'react'



class VaadNavbar extends React.Component{
    constructor(props){
        super(props);
    }


render(){
    const login = ( ! this.props.activeUser) ? <Nav.Link href="/#/login">Login</Nav.Link> : null
    const signup = ( ! this.props.activeUser ) ? <Nav.Link href="/#/signup">Signup</Nav.Link> : null
    const Dashboard = (  this.props.activeUser) ? <Nav.Link href="/#/dashboard">Dashboard</Nav.Link> : null

    const userNameToShow = (  this.props.activeUser ) ? <Nav.Link> Hello {this.props.activeUser.name}</Nav.Link> : null
    const logout = (this.props.activeUser) ? <Nav.Link href="/#/login/" onClick={ () => this.props.logout()}>Log out</Nav.Link> : null
  
    return(
        <Container >
        <Navbar bg="light" expand="lg" style={{background: "linear-gradient(180deg, rgba(42,139,219,1) 28%, rgba(232,232,232,1) 93%)"}}>
            <Navbar.Brand href="/#/" style={{width: "40px"}}><Image src="https://www.idfinfo.co.il/wp-content/uploads/2019/07/Insurance_of_1563714074.png" thumbnail /></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
                <Nav.Link href="/#/">Home</Nav.Link>
                {Dashboard}
            </Nav>
            <Nav className="ml-auto">
                 {/* <Nav.Link href="/#/login">Login</Nav.Link>
                <Nav.Link href="/#/Signup">Signup</Nav.Link>  */}
                {login}
                {signup}
                {userNameToShow}
                {logout}
            </Nav>
                
            </Navbar.Collapse>
      </Navbar>
      </Container>
    )
}

}


export default VaadNavbar