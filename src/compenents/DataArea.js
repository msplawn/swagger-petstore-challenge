import React, { Component } from "react";
import DataHeader from "../compenents/DataHeader";
import DataTable from "../compenents/DataTable";
import API from "../utils/API";

export default class DataArea extends Component {
    state = {
        pets: [{}],
        order: "descend",
        filteredPets: [{}],
        status: null,
        iconStatus: "question circle outline icon"
    }

    //Array containing heading Name and styling info
    headings = [
        { name: "Image", width: "33%" },
        { name: "Name", width: "33%" },
        // { name: "Status", width: "33%" },
        { name: "Status: (Click to mark sold)", width: "33%" }
    ];

    //On mount calls Swagger API. Sets state based on results.
    componentDidMount() {
        API.getPets().then(results => {
            console.log(results.data)
            // results.data.forEach(pet => {
            //     console.log(pet)
            // });
            // const value = results.data.forEach(statusValue => {
            //     return statusValue.status
            // });
            this.setState({
                pets: results.data,
                status: "available"
            });
            // return value
        });

        API.getCatImages().then(results => {
            console.log(results.data[0].url)
        })
    };

    onHandleClick() {
        console.log(this.state.status)
        this.setState({ status: "available" })
    }

    // Renders DataArea
    render() {
        return (
            <>
                <DataHeader />
                <div class="ui buttons center middle aligned" id="center-buttons">
                    <button className="ui button">Available</button>
                    <div className="or"></div>
                    <button className="ui positive button" onClick={this.onHandleClick}>Sold</button>
                </div>
                <div className="data-info">
                    {/* Defines props for DataTable */}
                    <DataTable
                        headings={this.headings}
                        pets={this.state.pets}
                        status={this.state.status}
                        iconStatus={this.state.iconStatus}
                    />

                </div>
            </>
        )
    }
}