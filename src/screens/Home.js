import React, { Component } from 'react'
import HomeTop from "../components/HomeComponent/HomeTop/HomeTop"
import HomeMovieList from "../components/HomeComponent/HomeMovieList/HomeMovieList"
import { search } from "../backend/searchPost";
import { Container } from 'react-bootstrap';
import "./Home.scss"


export default class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            startIndex : 0,
            length : 10,
            searchError: false,
            renderList:[],
        }
    }

    handleSearch = async (e, criterias) => {
        e.preventDefault();
        let obj = {
            name: criterias.name,
            startIndex: 0,
            length: 10,
        }
        console.log("search obj : " + obj.name )
        let res = await search(obj);
        console.log(res);
        this.setState({renderList : res.data})
    }

    render() {
        return (
            <React.Fragment>
                <div className="mainHomeDiv">
                    <Container>
                        <HomeTop searchFunction={this.handleSearch}/>
                        <div className="movieList">
                            <HomeMovieList movieList={this.state.renderList}/>
                        </div>
                    </Container>
                    
                </div>
            </React.Fragment>
        )
    }
}
