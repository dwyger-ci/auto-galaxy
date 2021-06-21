import logo from "../assets/logo.png"

const Header = () => {
  return <div style={{height: "65px", width: "100%", textAlign: "center"}}>
    <img src={logo} data-testid="header-logo" style={{width: "45px", float: "left", position: "relative", left: "20px"}} />
    <h1>Galaxy Auto</h1>
  </div>
}

export default Header