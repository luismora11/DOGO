import React from 'react'
import {LinkContainer} from 'react-router-bootstrap'
import {Navbar, Nav, Container, Image } from 'react-bootstrap'

const Header = () => {
    return  <header>  
    <Navbar  style={{background: '#000000'}} variant='dark' expand="lg" collapseOnSelect>
    <Container>
    <LinkContainer to="/">
 {/*<Navbar.Brand >DOGO</Navbar.Brand>*/}
 <Navbar.Brand><Image src='../images/dogo.jpg' height='70' width='250' roundedCircle/></Navbar.Brand>

  </LinkContainer>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="ml-auto">
    <LinkContainer to='/cart'>
      <Nav.Link ><i className='fas fa-shopping-cart '></i>Cart</Nav.Link>
      </LinkContainer>
    <LinkContainer to='/login'>
      <Nav.Link href="/login"><i className='fas fa-user'></i>Sign In</Nav.Link>
      </LinkContainer>
      
    </Nav>
    
  </Navbar.Collapse>
  </Container>
</Navbar>
     </header>
    
}

export default Header
