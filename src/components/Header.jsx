import React from "react";


function Header() {
  const sign = "<Portfolio />";

  return (
    <nav class="Nav navbar navbar-light bg-light container-fluid sticky-top navbar-expand-lg">
      <a class="logo navbar-brand" href="">{sign}</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span></button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <a class="nav-link" href="">HOME</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="services.html">SKILLS</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="team.html">PROJECTS</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="about.html">ABOUT</a>
          </li>
          <li class="nav-item nav-btn">
            <a type="button" class="btn btn-primary" href="contact.html">CONTACT ME</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;

{/* <div className="Nav container-fluid sticky-top">
    
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

</div> */}