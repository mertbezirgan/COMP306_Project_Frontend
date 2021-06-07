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
            sYear: NaN,
            eYear: NaN,
            sRank: NaN,
            eRank: NaN,
        }
    }

    handleChange = e => {
        e.preventDefault();
        switch (e.target.name) {
            case "name":
                this.setState({ name: e.target.value })
                break;
            case "sYear":
                this.setState({ sYear: parseInt(e.target.value) })
                break;
            case "eYear":
                this.setState({ eYear: parseInt(e.target.value) })
                break;
            case "sRank":
                this.setState({ sRank: parseFloat(e.target.value) })
                break;
            case "eRank":
                this.setState({ eRank: parseFloat(e.target.value) })
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

                                    <Form.Row className="nameRow">
                                        <Form.Group as={Col} controlId="name">
                                            <Form.Control className="formControl" type="text" placeholder="Name " name="name" onChange={this.handleChange} />
                                        </Form.Group>
                                    </Form.Row>
                                    <Form.Row>
                                        <p style={{ fontSize: "20px" }}>Search by year</p>
                                        <Form.Control className="formControlRank" type="number" placeholder="Start Year " name="sYear" onChange={this.handleChange} />
                                        <p style={{ fontSize: "20px" }}>-</p>
                                        <Form.Control className="formControlRank" type="number" placeholder="End Year" name="eYear" onChange={this.handleChange} />
                                    </Form.Row>
                                    <Form.Row>
                                        {/* <Form.Group controlId="rank"> */}
                                        <p style={{ fontSize: "20px" }}>Search by rank</p>
                                        <Form.Control className="formControlRank" type="number" placeholder="Start Rank " name="sRank" onChange={this.handleChange} step="0.01" />
                                        <p style={{ fontSize: "20px" }}>-</p>
                                        <Form.Control className="formControlRank" type="number" placeholder="End Rank" name="eRank" onChange={this.handleChange} step="0.01" />
                                        {/* </Form.Group> */}
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
