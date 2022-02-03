import React, { Component } from "react";
import DataBody from "./DataBody";

//Creating DataTable and passing necessary paramaters
function DataTable({ headings, pets, status, iconStatus }) {
    return (
        // <div className="datatable">
            <table className="ui celled table">
                <thead>
                    <tr>
                        {/* Creating a row with heading names and specified widths */}
                        {headings.map(({name, width}) => {
                            return (
                                <th 
                                    className="col"
                                    key={name}
                                    style={{width}}
                                >
                                    {name}
                                </th>
                            )
                        })}
                    </tr>
                </thead>
                <DataBody key={pets} pets={pets} value={iconStatus}/>
            </table>
        // </div>
    );
};

export default DataTable;