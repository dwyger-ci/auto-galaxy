import logo from "../assets/logo.png"

const Header = () => {
  return <div className="AppNav">
    <img src={logo} data-testid="header-logo" className="App-logo" alt="logo"/>
    <h1>Galaxy Auto</h1>
  </div>
}

export default Header