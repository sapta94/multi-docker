import React, { Component } from 'react';

import {Navbar,Nav,Button} from 'react-bootstrap';

export default class NavbarMenu extends Component {
    render(){
        return(
            <Navbar bg="light" variant="light">
                <Navbar.Brand href="#home">Pollution</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#features">Recents</Nav.Link>
                    <Nav.Link href="#pricing">Settings</Nav.Link>
                </Nav>
            </Navbar>
        )
    }
}