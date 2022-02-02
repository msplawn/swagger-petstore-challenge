import React, { Component } from "react";
import DataHeader from "../compenents/DataHeader";
import DataTable from "../compenents/DataTable";
import Pages from "../compenents/Pages";
import API from "../utils/API";

export default class DataArea extends Component {
    state = {
        pets: [{}],
        order: "descend",
        filteredPets: [{}],
        status: "available",
        iconStatus: "question circle outline icon"
    }

    //Array containing heading Name and styling info
    headings = [
        // { name: "Image", width: "33%" },
        { name: "Name", width: "50%" },
        // { name: "Status", width: "33%" },
        { name: "Status", width: "50%" }
    ];

    //On mount calls Swagger API. Sets state based on results.
    componentDidMount() {
        API.getPets().then(results => {
            console.log(results)
            // results.data.forEach(pet => {
            //     console.log(pet)
            // });
            this.setState({
                pets: results.data,
                // filteredPets: results.data,
                value: "check circle icon"
            });
        });

        API.getCatImages().then(results => {
            console.log(results.data[0].url)
        })
    }

    // Renders DataArea
    render() {
        return (
            <>
                <DataHeader />
                <div className="data-info">
                    {/* Defines props for DataTable */}
                    <DataTable
                        headings={this.headings}
                        pets={this.state.pets}
                        iconStatus={this.state.iconStatus}
                    />
                    <Pages />
                </div>
            </>
        )
    }
}