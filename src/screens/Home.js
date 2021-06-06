import React, { Component } from 'react'
import HomeTop from "../components/HomeComponent/HomeTop/HomeTop"
import { search } from "../backend/searchPost";


export default class Home extends Component {

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
    }

    render() {
        return (
            <React.Fragment>
                <div className="main">
                    <HomeTop searchFunction={this.handleSearch}/>
                </div>
            </React.Fragment>
        )
    }
}
