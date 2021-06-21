import { Nav, Navbar } from "react-bootstrap"

const NavPub = () => {

  // return <div>Nav</div>
  return <>
      <Navbar bg="light" expand="lg">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    </>
}



export default NavPub