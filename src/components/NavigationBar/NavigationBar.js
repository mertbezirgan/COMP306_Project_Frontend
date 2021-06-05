import React, { Component } from 'react'
import './NavigationBar.scss';
import Navbar from 'react-bootstrap/Navbar'

export default class NavigationBar extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar>
                    <Navbar.Brand href="#home">Navbar with text</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text>
                            Signed in as: <a href="#login">Mark Otto</a>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Navbar>
            </React.Fragment>
        )
    }
}
