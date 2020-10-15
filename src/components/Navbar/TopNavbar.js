import React, { useContext } from "react";
import { Button, Nav, Navbar } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { UserContext } from "../../App";

const TopNavbar = () => {
  let history = useHistory();
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  function redirectClient() {
    history.push("/profile/service-list");
  }
  function redirectAdmin() {
    history.push("/admin/service-list");
  }

  function manageUser() {
    history.push("/manage-user");
  }

  return (
    <Navbar expand="lg" className="mx-5">
      <Navbar.Brand>
        <img
          src="https://i.ibb.co/5GM9yfq/logo.png"
          alt="logo"
          className="img-fluid"
          style={{ width: 175 }}
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto mt-3">
          <Nav.Link href="" className="mx-auto">
            <p className="mx-3">Home</p>
          </Nav.Link>
          <Nav.Link href="" className="mx-auto">
            <p className="mx-3">Our Portfolio</p>
          </Nav.Link>
          <Nav.Link href="" className="mx-auto">
            <p className="mx-3">Our Team</p>
          </Nav.Link>
          <Nav.Link href="" className="mx-auto">
            <p className="mx-3">Contact Us</p>
          </Nav.Link>
        </Nav>
        {loggedInUser.email ? (
          <>
            {loggedInUser.isAdmin ? (
              <Button className="btn btn-info mx-3" onClick={redirectAdmin}>
                Admin
              </Button>
            ) : (
              <Button className="btn btn-info mx-3" onClick={redirectClient}>
                {loggedInUser.name}
              </Button>
            )}
            <Button
              className="btn btn-danger mx-3 text-light"
              onClick={manageUser}
            >
              SignOut
            </Button>
          </>
        ) : (
          <>
            <Button className="btn btn-secondary mx-3" onClick={manageUser}>
              SignIn
            </Button>
          </>
        )}
      </Navbar.Collapse>
    </Navbar>
  );
};

export default TopNavbar;
