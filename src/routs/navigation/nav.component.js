import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from 'reactstrap';

function Navigation(args) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
    <Nav
    >
      <NavItem>
        <NavLink
          active
          href="#"
        >
          Link
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="#">
          Another Link
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink
          disabled
          href="#"
        >
          Disabled Link
        </NavLink>
      </NavItem>
    </Nav>
    </div>
  );
}

export default Navigation;