import React, { useState } from 'react'
import { Nav, Navbar, Offcanvas } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import {MdOutlineDashboardCustomize} from "react-icons/md"

function MyOffcanvas() {
     const[show,setShow]=useState(false)
     const handleClose=()=>setShow(false);
     const handleShow=()=>setShow(true);

  return (
    <div><Navbar>
        <Navbar.Brand>
        <MdOutlineDashboardCustomize
              size={28}
              style={{ paddingRight: 5 }}
              onClick={handleShow}
            />Tourisom
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-nav-bar'>
        </Navbar.Toggle>
        <Navbar.Collapse id='responsive-nav-bar'></Navbar.Collapse>
        </Navbar>

        <Offcanvas placement='start' show={show} onHide={handleClose}>
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>Offcanvas</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <Nav className="flex-column">
                    <Nav.Link onClick={handleClose}>
                        <Link to="/">Dashborad</Link>
                    </Nav.Link>
                    <Nav.Link onClick={handleClose}>
                        <Link to="/Createpackage">Createpackage</Link>
                    </Nav.Link>
                    <Nav.Link onClick={handleClose}>
                        <Link to="/Managepackage">Managepackage</Link>
                    </Nav.Link>
                    <Nav.Link onClick={handleClose}>
                        <Link to="/Manageusers">Manageusers</Link>
                    </Nav.Link>
                    <Nav.Link onClick={handleClose}>
                        <Link to="/Managebooking">Managebooking</Link>
                    </Nav.Link>
                    <Nav.Link>
                        <Link to="/Manageissue">Manageissue</Link>
                    </Nav.Link>
                    <Nav.Link>
                        <Link to="/Manageenquiries">Manageenquiries</Link>
                    </Nav.Link>
                </Nav>
            </Offcanvas.Body>
        </Offcanvas>
        </div>
  )
}

export default MyOffcanvas