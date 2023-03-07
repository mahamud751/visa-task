import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

import React, { useEffect, useState } from "react";

import "./Navbar.css";
const NavMenu = () => {
  const [expanded, setExpanded] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [showDropdown2, setShowDropdown2] = useState(false);

  const handleToggle = () => {
    setExpanded(true);
  };
  const handleDropdownEnter = () => {
    setShowDropdown(true);
  };

  const handleDropdownLeave = () => {
    setShowDropdown(false);
  };
  const handleDropdownEnter2 = () => {
    setShowDropdown2(true);
  };

  const handleDropdownLeave2 = () => {
    setShowDropdown2(false);
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
        bg={scrolled ? "light" : "light"}
        variant={scrolled ? "light" : "light"}
        sticky="top"
        collapseOnSelect
        expand="lg"
        className="px-5 navbar_main"
      >
        <>
          {scrolled ? (
            <Navbar.Brand href="#home">
              <img
                src="http://www.ycimmigrationus.com/static/upload/image/20220319/1647648548458033.png"
                alt=""
                className="img-fluid"
                style={{ width: 320 }}
              />
            </Navbar.Brand>
          ) : (
            <Navbar.Brand href="#home">
              <img
                src="http://www.ycimmigrationus.com/static/upload/image/20220319/1647648548458033.png"
                alt=""
                className="img-fluid"
                style={{ width: 320 }}
              />
            </Navbar.Brand>
          )}

          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            onclick={handleToggle}
          />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto">
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
                id="basic-nav-dropdowns"
                onMouseEnter={handleDropdownEnter2}
                onMouseLeave={handleDropdownLeave2}
                show={showDropdown2}
              >
                <NavDropdown.Item href="#action/4.1">
                  Primary and secondary school inquiry
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/4.2">
                  UK University Search
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/4.3">
                  University Major Inquiry
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/4.4">
                  Ranking of University Majors
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.5">
                  University Rankings
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              {/* <Nav.Link href="#deets">More deets</Nav.Link> */}
              <Nav.Link
                eventKey={2}
                href="#memes"
                className="fw-bold text-bg-dark"
              >
                4000654327
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </>
      </Navbar>
    </>
  );
};

export default NavMenu;
