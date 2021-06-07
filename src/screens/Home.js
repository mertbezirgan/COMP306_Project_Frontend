import React, { Component } from 'react'
import HomeTop from "../components/HomeComponent/HomeTop/HomeTop"
import HomeMovieList from "../components/HomeComponent/HomeMovieList/HomeMovieList"
import { search, getRandomMovies, getGenres } from "../backend/homeReqs";
import { Button, Container } from 'react-bootstrap';
import "./Home.scss"
import Select from 'react-select'


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
            loading: true,
            Sgenres: null,
            selectedGenre: null,
        }
    }

    componentDidMount = async () => {
        let data = await getRandomMovies();
        let genres = await getGenres();
        let selectList = []
        if (genres) {
            for (let i = 0; i < genres.data.length; i++) {
                const g = genres.data[i];
                selectList.push({ value: g.genre, label: g.genre })
            }
        }
        this.setState({ renderList: data.success ? data.data : [], loading: false, Sgenres: selectList });
    }

    getRand = async () => {
        let data = await getRandomMovies();
        this.setState({ renderList: data.success ? data.data : [], loading: false });
    }

    handleSearch = async (e, criterias) => {
        e.preventDefault();
        let obj = {
            name: criterias.name,
            sYear: criterias.sYear,
            eYear: criterias.eYear,
            sRank: criterias.sRank,
            eRank: criterias.eRank,
            selectedGenre: this.state.selectedGenre ? this.state.selectedGenre.value : null,
            startIndex: 0,
            length: 10,
        }
        let res = await search(obj);
        if (res) {
            console.log(res);
            this.setState({ renderList: res.data, currCriterias: criterias, startIndex: 0, searchMade: true })
        } else {
            console.log(res.error)
        }

    }

    handlePageChange = async (criterias, x) => {
        if (this.state.currCriterias) {
            let obj = {
                name: criterias.name,
                sYear: criterias.sYear,
                eYear: criterias.eYear,
                sRank: criterias.sRank,
                eRank: criterias.eRank,
                selectedGenre: this.state.selectedGenre ? this.state.selectedGenre.value : null,
                startIndex: x,
                length: 10,
            }
            let res = await search(obj);
            console.log(res);
            this.setState({ renderList: res.data })
        }

    }

    nextPage = () => {
        if (this.state.searchMade) {
            let x = this.state.startIndex + this.state.length;
            this.setState({ startIndex: x })
            this.handlePageChange(this.state.currCriterias, x)
        } else {
            this.setState({ loading: true })
            this.getRand();
        }
    }

    prevPage = () => {
        let x = this.state.startIndex - this.state.length;
        this.setState({ startIndex: x })
        this.handlePageChange(this.state.currCriterias, x)
    }

    handleChange = selectedGenre => {
        this.setState({ selectedGenre: selectedGenre });
        console.log(`Option selected:`, selectedGenre);
    };

    render() {
        return (
            <React.Fragment>
                <div className="mainHomeDiv">
                    <Container>
                        <HomeTop searchFunction={this.handleSearch} />
                        <div className="movieList">
                            {this.state.Sgenres
                                ?
                                <>
                                    <div className="categoryFilterClass">
                                        <h4>Categories</h4>
                                        <div style={{ width: "45%", fontSize: "20px"}}>
                                            <div style={{minWidth : "350px"}}>
                                                <Select
                                                    className="basic-single"
                                                    classNamePrefix="select"
                                                    isClearable={true}
                                                    isSearchable={true}
                                                    name="selectedGenre"
                                                    onChange={this.handleChange}
                                                    options={this.state.Sgenres}
                                                />
                                            </div>
                                        </div>

                                    </div>
                                </>
                                :
                                <>
                                </>
                            }
                            <HomeMovieList loading={this.state.loading} movieList={this.state.renderList} nextPage={this.nextPage} prevPage={this.prevPage} startIndex={this.state.startIndex} />
                        </div>
                    </Container>

                </div>
            </React.Fragment>
        )
    }
}
