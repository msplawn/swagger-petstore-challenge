import React, { Component } from "react";
import DataHeader from "./DataHeader";
import DataTable from "./DataTable";
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
        { name: "ID", width: "33%" },
        { name: "Name", width: "33%" },
        { name: "Status: (Click to mark sold)", width: "33%" }
    ];

    //On mount calls Swagger API. Sets state based on results.
    componentDidMount() {
        this.displayAvailablePets();
    };

    // Displays available pets on button click
    displayAvailablePets = () => {
        API.getPets().then(results => {

            // Filters out duplicate pets
            const petIds = results.data.map(pet => pet.id);
            const uniquePets = results.data.filter((pet, i ) => !petIds.includes(pet.id, i + 1));
            this.setState({
                pets: uniquePets,
            });
        });
    }

    // Displays sold pets on button click
    displaySoldPets = () => {
        API.getSoldPets().then(soldPets => {

                        // Filters out duplicate pets

            const soldPetIds = soldPets.data.map(pet => pet.id);
            const soldUniquePets = soldPets.data.filter((pet, i ) => !soldPetIds.includes(pet.id, i + 1));
            this.setState({pets: soldUniquePets});
        })
    }

    // Renders DataArea
    render() {
        return (
            <>
                <DataHeader className="header"/>
                <div className="ui buttons grid center middle aligned" id="center-buttons">
                    <button className="ui button" onClick={() => this.displayAvailablePets()}>Available</button>
                    <div className="or"></div>
                    <button className="ui positive button" onClick={() => this.displaySoldPets()}>Sold</button>
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