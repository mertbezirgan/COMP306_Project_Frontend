import React, { Component } from 'react'
import HomeTop from "../components/HomeComponent/HomeTop/HomeTop"
import HomeMovieList from "../components/HomeComponent/HomeMovieList/HomeMovieList"
import { search, getRandomMovies } from "../backend/homeReqs";
import { Container } from 'react-bootstrap';
import "./Home.scss"


export default class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            startIndex: 0,
            length: 10,
            searchError: false,
            renderList: [],
            currCriterias: null,
            searchMade: false,
        }
    }

    // componentDidMount = async () => {
    //     let randomData = await getRandomMovies();
    //     console.log(randomData);
    //     this.setState({renderList: randomData});
    // }

    // getRand = async () => {
    //     let randomData = await getRandomMovies();
    //     console.log(randomData);
    //     this.setState({renderList: randomData});
    // }

    handleSearch = async (e, criterias) => {
        e.preventDefault();
        let obj = {
            name: criterias.name,
            sYear: criterias.sYear,
            eYear: criterias.eYear,
            sRank: criterias.sRank,
            eRank: criterias.eRank,
            startIndex: 0,
            length: 10,
        }
        console.log(obj)
        let res = await search(obj);
        console.log(res);
        this.setState({ renderList: res.data, currCriterias: criterias, startIndex: 0, searchMade: true })
    }

    handlePageChange = async (criterias, x) => {
        if (this.state.currCriterias) {
            let obj = {
                name: criterias.name,
                sYear: criterias.sYear,
                eYear: criterias.eYear,
                sRank: criterias.sRank,
                eRank: criterias.eRank,
                startIndex: x,
                length: 10,
            }
            let res = await search(obj);
            console.log(res);
            this.setState({ renderList: res.data })
        }

    }

    nextPage = () => {
        if(this.state.searchMade){
            let x = this.state.startIndex + this.state.length;
            this.setState({ startIndex: x })
            this.handlePageChange(this.state.currCriterias, x)
        }else{
            // this.getRand();
        }
    }

    prevPage = () => {
        let x = this.state.startIndex - this.state.length;
        this.setState({ startIndex: x })
        this.handlePageChange(this.state.currCriterias, x)
    }

    render() {
        return (
            <React.Fragment>
                <div className="mainHomeDiv">
                    <Container>
                        <HomeTop searchFunction={this.handleSearch} />
                        <div className="movieList">
                            <HomeMovieList movieList={this.state.renderList} nextPage={this.nextPage} prevPage={this.prevPage} startIndex={this.state.startIndex} />
                        </div>
                    </Container>

                </div>
            </React.Fragment>
        )
    }
}
