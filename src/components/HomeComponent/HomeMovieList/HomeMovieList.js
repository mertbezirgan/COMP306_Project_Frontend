import React, { Component } from 'react'
import "./HomeMovieList.scss";
import Table from "react-bootstrap/Table";
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
                                        <td><Link to={`/movies/${m.id}`}>details</Link></td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </Table>
                </div>
            </React.Fragment>
        )
    }
}