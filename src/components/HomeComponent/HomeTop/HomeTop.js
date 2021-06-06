import React, { Component } from 'react'
import './homeTop.scss';
import Col from 'react-bootstrap/Col';
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container"
import Form from "react-bootstrap/Form";




export default class HomeTop extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: "",
            sYear: "",
            eYear: "",
        }
    }

    handleChange = e => {
        e.preventDefault();
        switch (e.target.name) {
            case "name":
                this.setState({ name: e.target.value })
                break;
            case "sYear":
                this.setState({ sYear: e.target.value })
                break;
            case "eYear":
                this.setState({ eYear: e.target.value })
                break;

            default:
                break;
        }
    };


    render() {
        return (
            <React.Fragment>
                <div id="mainDiv">
                    <Container>

                        <div className="main">

                            <div id="form-wrapper">
                                <Form onSubmit={(e) => this.props.searchFunction(e, this.state)}>

                                    <Form.Row>
                                        <Form.Group as={Col}>
                                            <Form.Text style={{ font: "normal bold 25px 'Raleway',sans-serif", textAlign: "center" }}>Search</Form.Text>
                                        </Form.Group>
                                    </Form.Row>

                                    <Form.Row>
                                        <Form.Group as={Col} controlId="name">
                                            <Form.Control className="formControl" type="text" placeholder="Name " name="name" onChange={this.handleChange} />
                                        </Form.Group>
                                        <Form.Group as={Col} controlId="year">
                                            <Form.Control className="formControl" type="number" placeholder="Start Year " name="sYear" onChange={this.handleChange} />
                                            <Form.Control style={{ marginTop: "10px" }} className="formControl" type="number" placeholder="End Year" name="eYear" onChange={this.handleChange} />
                                        </Form.Group>
                                    </Form.Row>

                                    <Form.Row className="center">
                                        <Button variant="primary" type="submit"
                                            style={{ width: "40%", borderRadius: "10px", border: "none" }}>
                                            Search
                                        </Button>
                                    </Form.Row>
                                </Form>
                            </div>

                        </div>

                    </Container>
                </div>
            </React.Fragment>
        )
    }
}
