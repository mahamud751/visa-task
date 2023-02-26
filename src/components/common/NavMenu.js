import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

import React, { useEffect, useState } from "react";

import "./Navbar.css";
const NavMenu = () => {
  const [expanded, setExpanded] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  const handleDropdownEnter = () => {
    setShowDropdown(true);
  };

  const handleDropdownLeave = () => {
    setShowDropdown(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <Navbar
        bg={scrolled ? "dark" : "light"}
        variant={scrolled ? "dark" : "light"}
        sticky="top"
        expanded={expanded}
        collapseOnSelect
        expand="lg"
      >
        <Container>
          <Navbar.Brand href="#home">Studying in the UK is UKEC</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
              <NavDropdown
                title="Study Abroad Application"
                id="basic-nav-dropdown"
                onMouseEnter={handleDropdownEnter}
                onMouseLeave={handleDropdownLeave}
                show={showDropdown}
              >
                <NavDropdown.Item href="#action/3.1">
                  Study abroad at a young age
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Undergraduate Study Abroad
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Study Abroad
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">
                  Ph.D study abroad
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown
                title="College Inquiry   "
                id="basic-nav-dropdown"
                onMouseEnter={handleDropdownEnter}
                onMouseLeave={handleDropdownLeave}
                show={showDropdown}
              >
                <NavDropdown.Item href="#action/3.1">
                  Primary and secondary school inquiry
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  UK University Search
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  University Major Inquiry
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">
                  Ranking of University Majors
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.5">
                  University Rankings
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav.Link href="#deets">More deets</Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                Dank memes
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavMenu;
