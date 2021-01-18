import React from "react";
import { Nav, Navbar, Button} from 'react-bootstrap';


function Header() {
  const sign = "<Portfolio />";

  return (
    <div className="Nav">
    
    <Navbar nav-fill w-100>{/* <Navbar> bg="light" variant="light" */}
      <Navbar.Brand href="#home">{sign}</Navbar.Brand>

      <Nav className="ml-auto">
      <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#home">Skills</Nav.Link>
        <Nav.Link href="#features">About</Nav.Link>
        <Nav.Link href="#pricing">Projects</Nav.Link>
        <Button variant="outline-primary">Contact Me</Button>
      </Nav>
    </Navbar>

    </div>
  );
}

export default Header;
