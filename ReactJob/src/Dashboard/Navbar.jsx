// import React from 'react'
import {Navbar, Nav,Container } from 'react-bootstrap'

export default function Navtop () {
  return (
  <>
        <Navbar className='container text-bg-dark' data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">DashBoard</Navbar.Brand>
          <Nav className="nav nav-pills nav-tab">
            <Nav.Link  >Home</Nav.Link>
            <Nav.Link href="#features">Activity</Nav.Link>
            <Nav.Link href="#pricing">Prof</Nav.Link>
          </Nav>
        </Container>
      </Navbar>



  </>
  );
}


