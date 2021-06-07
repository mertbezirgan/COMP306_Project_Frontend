import React, { Component } from 'react'
import "./HomeMovieList.scss";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";
import { Link } from "react-router-dom";


export default class HomeMovieList extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    genUrl = (id) => {
        let link = `/movies/${id}`
        return link;
    }


    render() {
        return (
            <React.Fragment>
                <div className="main">
                    <p>Movies</p>
                    {this.props.loading
                        ?
                        <>
                            <div className="spinner-c">
                                <Spinner animation="border" />
                            </div>
                        </>
                        :
                        <>
                            <Table striped bordered hover size="sm">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Name</th>
                                        <th>Year</th>
                                        <th>Rank</th>
                                        <th>Details</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        this.props.movieList.map(m => (
                                            <tr key={m.id}>
                                                <td>{m.id}</td>
                                                <td>{m.name}</td>
                                                <td>{m.year}</td>
                                                <td>{m.rank}</td>
                                                <td><Link to={`/movie/${m.id}`}>details</Link></td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </Table>
                            <div className="pagebuttons">
                                {this.props.movieList.length !== 0
                                    ?
                                    <>
                                        <div>
                                            {this.props.startIndex !== 0
                                                ?
                                                <>
                                                    <div>
                                                        <Button onClick={this.props.prevPage}>Prev</Button>
                                                    </div>
                                                </>
                                                :
                                                null
                                            }
                                        </div>
                                        <div>
                                            {this.props.movieList.length === 10
                                                ?
                                                <>
                                                    <div>
                                                        <Button onClick={this.props.nextPage}>Next</Button>
                                                    </div>
                                                </>
                                                :
                                                null
                                            }
                                        </div>
                                    </>
                                    :
                                    null
                                }


                            </div>
                        </>
                    }


                </div>
            </React.Fragment>
        )
    }
}