
import React from "react";
import { NavLink } from "react-router-dom";
import { Container } from "react-bootstrap";
import { Navbar , Nav} from "react-bootstrap";
export default function NavigationBar (){
    


return(
<>
<Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#">MyEvents</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink to="events" style={({isActive})=> ({textDecoration : isActive? "underline":"none"}) }>Events</NavLink>
            <NavLink to="events/Add"  style={({isActive})=>({textDecoration:isActive? "underline":"none"})}>AddNewEvent</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
</>

)}