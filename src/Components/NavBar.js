import React, { Component } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
  Col,
  Row,
  Button,
} from "reactstrap";
import img from "../images/bg1.jpg";
import Flip from "react-reveal/Flip";
import ScrollspyNav from "react-scrollspy-nav";
import HamburgerMenu from "react-hamburger-menu";

class NavBar extends Component {
  state = {
    isOpen: false,
    changeColor: true,
  };

  componentDidMount() {
    window.addEventListener("scroll", this.listenScrollEvent);
  }
  listenScrollEvent = (e) => {
    if (window.scrollY < 400) {
      this.setState({ changeColor: true });
    } else {
      this.setState({ changeColor: false });
    }
  };

  toggle = (e) => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  };

  render() {
    return (
      <div className="overflow-hidden " id="main">
        <ScrollspyNav
          scrollTargetIds={["about", "portfolio", "contact"]}
          activeNavClass="is-active"
          scrollDuration="1000"
          componentTag="<NavLink/>"
        >
          <div className="">
            <Navbar
              expand="md"
              dark
              className="fixed-top d-inline-block "
              style={{
                backgroundColor: this.state.changeColor
                  ? "transparent"
                  : "rgb(51,51,51)",
                transition: "all .5s ease",
              }}
            >
              <NavbarToggler onClick={this.toggle} className="border-0 mt-2">
                <HamburgerMenu
                  isOpen={this.state.isOpen}
                  navbar
                  menuClicked={this.toggle}
                  color="white"
                  borderRadius={0}
                  animationDuration={0.5}
                />
              </NavbarToggler>
              <Collapse
                isOpen={this.state.isOpen}
                navbar
                className="text-center "
              >
                <Nav className="mx-auto " navbar style={{ fontSize: "20px" }}>
                  <NavItem>
                    <NavLink
                      style={{
                        cursor: "pointer",
                        color: "white",
                      }}
                      onClick={this.handleClick}
                      href="/"
                    >
                      Home
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      style={{
                        cursor: "pointer",
                        color: "white",
                      }}
                      href="#about"
                    >
                      About
                    </NavLink>
                  </NavItem>

                  <NavItem>
                    <NavLink
                      style={{
                        cursor: "pointer",
                        color: "white",
                      }}
                      href="#portfolio"
                    >
                      Portfolio
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      style={{
                        cursor: "pointer",
                        color: "white",
                      }}
                      href="#contact"
                    >
                      Contact
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      style={{
                        cursor: "pointer",
                        color: "white",
                      }}
                      rel="noopener noreferrer"
                      target="_blank"
                      href="https://github.com/mulualm1997"
                    >
                      GitHub
                    </NavLink>
                  </NavItem>
                </Nav>
              </Collapse>
            </Navbar>
          </div>

          <div
            className="px-5"
            style={{
              minHeight: "100vh",
              background: `url(${img}) center center fixed no-repeat`,
              backgroundSize: "cover",
              paddingTop: "200px",
            }}
          >
            <Row className="pt-5 px-5">
              <Col className="text-center  main">
                <Flip left cascade>
                  <h1 className=" display-3 text-light font-weight-bold">
                    Mulu Defersha
                  </h1>
                  <h5
                    className="text-white-50 shortdesc"
                    style={{
                      lineHeight: "35px",
                    }}
                  >
                    Full-Stack Developer React \ Nodejs \ JavaScript
                  </h5>

                  <h5 className="text-white-50 shortdesc">
                    {" "}
                    I develop Full-Stack single page applications using React.
                  </h5>

               
                  <a href="#portfolio">
                    <Button outline color="warning">
                      View my work
                    </Button>
                  </a>
                  <br />
                  <div className="mt-2">
                    <a
                      rel="noopener noreferrer"
                      target="_blank"
                      href="https://www.facebook.com/profile.php?id=100030727270458"
                    >
                      <i
                        style={{
                          cursor: "pointer",
                        }}
                        className="fab fa-facebook-f fa-2x mr-3 text-light "
                      ></i>
                    </a>
                    <a
                      rel="noopener noreferrer"
                      target="_blank"
                      href="https://www.linkedin.com/in/mulualm-defersha-3917031b0/"
                    >
                      <i
                        style={{
                          cursor: "pointer",
                        }}
                        className="fab fa-linkedin-in fa-2x  mr-3 text-light"
                      ></i>
                    </a>
                    <a
                      rel="noopener noreferrer"
                      target="_blank"
                      href="https://twitter.com/Mulualm97"
                    >
                      <i
                        style={{
                          cursor: "pointer",
                        }}
                        className="fab fa-twitter fa-2x  mr-3 text-light"
                      ></i>
                    </a>
                    <a
                      rel="noopener noreferrer"
                      target="_blank"
                      href="https://www.instagram.com/mulualm_defresh/"
                    >
                      <i
                        style={{
                          cursor: "pointer",
                        }}
                        className="fab fa-instagram fa-2x  mr-3 text-light"
                      ></i>
                    </a>
                    <a
                      rel="noopener noreferrer"
                      target="_blank"
                      href="https://github.com/mulualm1997"
                    >
                      <i
                        style={{
                          cursor: "pointer",
                        }}
                        className="fab fa-github fa-2x text-light"
                      ></i>
                    </a>
                  </div>
                </Flip>
              </Col>
            </Row>
          </div>
        </ScrollspyNav>
      </div>
    );
  }
}
export default NavBar;
