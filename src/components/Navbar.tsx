"use client";

import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useSession, signOut } from "next-auth/react";
import Button from "./ui/Button";

const NavBar = () => {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return null; // or you can return a loader here
  }

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">
          <div className="text-3xl font-bold">LOGO</div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto d-flex align-items-center gap-6">
            {status === "authenticated" && (
              <>
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/query">Files</Nav.Link>
                <Nav.Link href="/utils">Utils</Nav.Link>
                <Nav.Link href="/admin">Admin</Nav.Link>
                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown>
              </>
            )}
          </Nav>
          <Nav className="ms-auto d-flex align-items-center gap-6">
            {status === "unauthenticated" && (
              <>
                <Nav.Link href="/login">
                  <Button type="button" name="Log in" className="hover:text-blue-500" />
                </Nav.Link>
                <Nav.Link href="/signup">
                  <Button type="button" name="Get Started" className="bg-green-400 hover:bg-green-500 py-2.5 px-4" />
                </Nav.Link>
              </>
            )}
            {status === "authenticated" && (
              <>
                {session && session.user && (
                  <Nav.Link href="/profile">
                    <div className="d-flex align-items-center">
                      <img
                        src={session.user.image ?? ""}
                        alt="Profile"
                        className="nav-user-profile d-inline-block rounded-circle mr-3"
                        width="50"
                        height="50"
                        data-testid="navbar-picture-mobile"
                        referrerPolicy="no-referrer"
                      />
                      <h6 className="d-inline-block mb-0" data-testid="navbar-user-mobile">
                        {session.user.name}
                      </h6>
                    </div>
                  </Nav.Link>
                )}

                <Nav.Link href="#logout">
                  <Button type="button" name="Log out" className="hover:text-blue-500" onClick={() => signOut()} />
                </Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
