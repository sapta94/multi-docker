import React, { Component } from 'react';

import {Navbar,Nav,Button} from 'react-bootstrap';
import {Link} from "react-router-dom"

export default class NavbarMenu extends Component {
    render(){
        return(
            <Navbar bg="light" variant="light">
                <Navbar.Brand href="#home">Pollution</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="#home"><Link to='/'>Home</Link></Nav.Link>
                    <Nav.Link href="#features"><Link to='/recents'>Recents</Link></Nav.Link>
                    <Nav.Link href="#settings">Settings</Nav.Link>
                </Nav>
            </Navbar>
        )
    }
}