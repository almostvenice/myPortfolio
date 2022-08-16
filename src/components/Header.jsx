import { useState } from "react";
import { Navbar, Collapse, NavbarToggler, Nav, NavItem } from "reactstrap";
import {
  FaCoffee,
  FaBook,
  FaProjectDiagram,
  FaAddressCard,
  FaDownload,
} from "react-icons/fa";
import { Link } from "react-scroll";
import "./header.css";
import Axios from "axios";
import FileDownload from "js-file-download";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const download = (e) => {
    e.preventDefault();
    Axios({
      url: "http://localhost:4000",
      method: "GET",
      responseType: "blob",
    }).then((res) => {
      FileDownload(res.data, "DavidResume.pdf");
    });
  };

  return (
    <Navbar dark color="primary" fixed="top" expand="md">
      <a
        href={require("../app/assets/DavidResume.pdf")}
        download="DavidPreciadoResume"
      >
        <button id="resumeDownload">
          Download Resume <FaDownload />
        </button>
      </a>
      <NavbarToggler onClick={() => setMenuOpen(!menuOpen)} />
      <Collapse isOpen={menuOpen} navbar>
        <Nav className="ms-auto" navbar>
          <NavItem>
            <Link
              className="nav-link slideA "
              to="home"
              smooth={true}
              duration={1000}
            >
              <FaCoffee /> Home
            </Link>
          </NavItem>
          <NavItem>
            <Link
              className="nav-link slideB"
              to="aboutMeSection"
              smooth={true}
              duration={100}
            >
              <FaBook /> About
            </Link>
          </NavItem>
          <NavItem>
            <Link
              className="nav-link slideC"
              to="projectSection"
              smooth={true}
              duration={1000}
            >
              <FaProjectDiagram /> Projects
            </Link>
          </NavItem>
          <NavItem>
            <Link
              className="nav-link slideD"
              to="contactForm"
              smooth={true}
              duration={1000}
            >
              <FaAddressCard /> Contact
            </Link>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default Header;
