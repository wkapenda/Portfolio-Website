import React from "react";
import { Nav, Navbar, Button} from 'react-bootstrap';


function Header() {
  const sign = "<Portfolio />";

  return (
    <div className="Nav container-fluid sticky-top">
    
    <Navbar nav-fill w-100>
      <Navbar.Brand href="#home">{sign}</Navbar.Brand>

      <Nav className="ml-auto">
      <Nav.Link href="#home">HOME</Nav.Link>
        <Nav.Link href="#home">SKILLS</Nav.Link>
        <Nav.Link href="#features">ABOUT</Nav.Link>
        <Nav.Link href="#pricing">PROJECTS</Nav.Link>
        <Button variant="primary">CONTACT ME</Button>
      </Nav>
    </Navbar>

    </div>
  );
}

export default Header;
