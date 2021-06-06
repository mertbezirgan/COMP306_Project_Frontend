import React, { Component } from 'react'
import './NavigationBar.scss';
import Navbar from 'react-bootstrap/Navbar'

export default class NavigationBar extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar>
                    <Navbar.Brand href="/">KUMDB</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text>
                            
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Navbar>
            </React.Fragment>
        )
    }
}
