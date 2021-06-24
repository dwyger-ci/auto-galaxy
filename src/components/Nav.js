import { Nav, Navbar } from "react-bootstrap"
import shoppingCart from "../assets/shoppingCart.png"

const NavPub = () => {

  // return <div>Nav</div>
  return <>
      <Navbar bg="light" expand="lg">
      <Navbar id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link className="cart-link" href="/cart" data-testid="cart-link"><img src={shoppingCart} alt="cart img" /></Nav.Link>
        </Nav>
      </Navbar>
    </Navbar>
    </>
}



export default NavPub