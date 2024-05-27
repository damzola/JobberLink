// import React from 'react'
import {Nav} from 'react-bootstrap'

export default function Layout(){
  return (
    <Nav defaultActiveKey="/home" className="flex-column  ">
      <Nav.Link href="#">Active</Nav.Link>
      <Nav.Link eventKey="link-1">Link</Nav.Link>
      <Nav.Link eventKey="link-2">Link</Nav.Link>
      <Nav.Link eventKey="disabled" disabled>
        Disabled
      </Nav.Link>
    </Nav>
  );
}
