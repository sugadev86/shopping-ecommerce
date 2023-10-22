import React, { FC } from 'react'
import { Navbar , Nav, Container, NavDropdown, Carousel} from 'react-bootstrap'
import { SliderArr } from '../../images/images'

interface IProps {}

/**
* @author
* @function @Header
**/

export const Header:FC<IProps> = (props) => {
  return (
    <>
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
    <Container>
      <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#features">Home</Nav.Link>
          <NavDropdown title="Products" id="collapsible-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Products</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Nav>
          <Nav.Link href="#deets">Cart</Nav.Link>
          <Nav.Link eventKey={2} href="#memes">
          Login / Sign Up
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  <Carousel data-bs-theme="dark">
    {SliderArr.map((image)=>
          <Carousel.Item>
          <img
            className="d-block w-100"
            src={image.src}
            alt="First slide"
          />
          <Carousel.Caption>
            <h5>First slide label</h5>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
    )}
    </Carousel>
  </>
   )
 }
