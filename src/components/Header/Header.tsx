import React from "react";
import { Navbar, Container, Nav, NavbarBrand } from "react-bootstrap";
import { Bell, Logo, Menu, Person } from "assets/icons/svgs";

import "./header.styles.scss";

const Header: React.FC = () => {
  return (
    <Navbar className="header" variant="dark" expand="lg">
      <Container className="d-flex justify-content-between align-items-center">
        <NavbarBrand>
          <Menu className="icon-menu" />
        </NavbarBrand>

        <Nav>
          <NavbarBrand>
            <Logo className="logo" />
          </NavbarBrand>
        </Nav>

        <Nav className="d-flex align-items-center gap-4">
          <Bell className="icon-notification" />
          <div className="d-flex align-items-center gap-1">
            <div className="user-image rounded-circle d-flex justify-content-center align-items-center">
              <Person className="icon-user" />
            </div>
            <div>
              <div>Usuário</div>
            </div>
          </div>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
