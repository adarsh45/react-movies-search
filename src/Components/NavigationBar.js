import { Navbar, NavbarBrand } from "reactstrap";

const NavigationBar = () => {
  return (
    <Navbar
      color="dark"
      dark
      fixed="top"
      expand="md"
      className="navbar"
      style={{ width: "100%" }}
    >
      <NavbarBrand href="/" style={{ fontSize: "1.8em" }}>
        <span style={{ color: "red" }}>Movies</span>Pedia
      </NavbarBrand>
    </Navbar>
  );
};

export default NavigationBar;
