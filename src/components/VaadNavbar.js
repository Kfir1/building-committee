import { Container, Image, Nav, Navbar } from 'react-bootstrap';
import React from 'react'



class VaadNavbar extends React.Component{
    constructor(props){
        super(props);
    }


render(){
    const login = ( ! this.props.activeUser) ? <Nav.Link href="/#/login"><strong>Login</strong></Nav.Link> : null
    const signup = ( ! this.props.activeUser ) ? <Nav.Link href="/#/signup"><strong>Signup</strong></Nav.Link> : null
    const Dashboard = (  this.props.activeUser) ? <Nav.Link href="/#/dashboard"><strong>Dashboard</strong></Nav.Link> : null
    const tenantsAccounts = ( this.props.activeUser && this.props.activeUser.isCommitteeMember  ) ?  <Nav.Link href="/#/tenantAccount"><strong>Tenant Account</strong></Nav.Link> : null

    const userNameToShow = (  this.props.activeUser ) ? <Nav.Link> Hello {this.props.activeUser.name}</Nav.Link> : null
    const logout = (this.props.activeUser) ? <Nav.Link href="/#/login/" onClick={ () => this.props.logout()}><strong>Log out</strong></Nav.Link> : null
  
    return(
        <Container >
        <Navbar bg="light" expand="lg" style={{background: "linear-gradient(180deg, rgba(42,139,219,1) 28%, rgba(232,232,232,1) 93%)"}}>
            <Navbar.Brand href="/#/" style={{width: "77px"}}><Image style={{width: "77px", borderRadius:"50%"}} src="https://i.pinimg.com/736x/93/1d/6b/931d6b0f3e13feb6c8e3825f8e0ec3d8.jpg" thumbnail /></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
                <Nav.Link href="/#/"><strong>Home</strong></Nav.Link>
                {Dashboard}
                {tenantsAccounts}
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