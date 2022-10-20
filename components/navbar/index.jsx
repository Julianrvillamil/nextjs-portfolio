import React from "react";
import Button from "react-bootstrap/Button";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import style from "./Navbar.module.css";

export default function NavbarPortfolio() {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
        <Container>
          <Navbar.Brand href="#home" className={style.name}>
            Julian Roa Villamil
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              {/* <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link> */}
            </Nav>
            <Nav>
              <Nav.Link href="#skills">Habilidades</Nav.Link>
              <Nav.Link href="#projects">Proyectos</Nav.Link>
              <Nav.Link href="#contact">Contacto</Nav.Link>
              {/* <NavDropdown title="Language" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">ES</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">EN</NavDropdown.Item>
              </NavDropdown> */}
              {/* <Nav.Link eventKey={2} href="#memes">
                Dank memes
              </Nav.Link> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <style jsx>{`
        Navbar {
          fixed: top;
        }
      `}</style>
    </div>
  );
}
