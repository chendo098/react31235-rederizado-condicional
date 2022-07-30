import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
import {Link} from 'react-router-dom'

const NavBar = () => {
  return (
    <>
    <Navbar id="navbar" bg="dark" variant="dark">
    <Container>
      <Link className="links"  to="/">React JS 31235</Link>
      <Nav className="me-auto">
        <Link className="links" to="/rend1">Rend.1</Link>
        <Link className="links" to="/rend2">Rend.2</Link>
        <Link className="links" to="/rend3">Rend.3</Link>
        <Link className="links" to="/styling">Styling</Link>
        <Link className="links" to="/classes">Classes</Link>
        <Link className="links" to="/multiclasses">Multi-Classes</Link>
      </Nav>
    </Container>
  </Navbar>
  </>
  )
}

export default NavBar