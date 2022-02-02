import React, { Component } from "react";
import DataBody from "./DataBody";

function DataTable({ headings, pets, iconStatus }) {
    console.log({iconStatus})
    return (
        // <div className="datatable">
            <table className="ui celled table">
                <thead>
                    <tr>
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