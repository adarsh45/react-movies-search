import { Collapse } from "bootstrap";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  Nav,
  Navbar,
  NavbarBrand,
  NavbarText,
  NavbarToggler,
  NavItem,
} from "reactstrap";

const NavigationBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
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
        {/* <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink href="/components/">Components</NavLink>
            </NavItem>
            <NavItem>
              <NavLink>GitHub</NavLink>
            </NavItem>
          </Nav>
          <NavbarText>Simple Text</NavbarText>
        </Collapse> */}
      </Navbar>
    </div>
  );
};

export default NavigationBar;
