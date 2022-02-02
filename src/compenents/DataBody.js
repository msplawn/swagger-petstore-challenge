import React, { useEffect, useState, useRef } from "react";
import { Pagination } from "semantic-ui-react";
// import Pages from "./Pages";
import API from "../utils/API";

function DataBody({ pets, value, data }) {
    console.log(data)
    const [className, setClassName] = useState(value);
    const [id, setId] = useState(0);
    const [availability, setAvailability] = useState(data);
    const [activePage, setActivePage] = useState(1);
    const [page, setPage] = useState(1)
    const idRef = useRef(null)

    const animals = [
        "doggie",
        "fish",
        "cat",
        "lion",
        "tiger",
        "dragon",
        "mouse"
    ];

    const handleClick = (i) => {
        // console.log(this)
        className === "question circle outline icon" ? console.log("yeeeet") : console.log("nahhhhh")
        console.log(i)
        // console.log(document.getele(`${i}`))
        // setStatus("check circle icon")
        // this.setState({status: "check circle icon"})
        value = "check circle icon"
        const icon = document.getElementById(`${i}`)
        icon.setAttribute("class", value)
        const availabilityValue = "Sold!"
        icon.textContent = `${availabilityValue}`
        // setClassName((value))
        // document.querySelector(`.${i}`).textContent = availabilityValue
    }

    const onChange = async (e, pageInfo) => {
        console.log(pageInfo.activePage)
        await setActivePage(pageInfo.activePage)
        console.log(activePage)
    };

    const getPages = (pets) => {
        const pages = Math.round(pets.length / 10);
        return pages;
    }

    // useEffect(() => {
    //     // console.log(pets)
    //     let petArray = []
    //     pets.forEach(petGroup => {
    //         // console.log(petGroup)
    //         const newPet = petGroup.name.toLowerCase();
    //         petArray.push(newPet);

    //     });
    //     // console.log(petArray)
    //     // console.log("yoooooo")
    // }) 

    return (
        <>
            <tbody value={value}>
                {pets
                    // .name.toLowerCase()
                    // .map(pets => pets.name.toLowerCase())
                    // .filter(({name}) => 
                    //     name === "doggie" || 
                    //     name === "fish" ||
                    //     name === "Cat" ||
                    //     name === "Lion" ||
                    //     name === "mouse"
                    // )
                    .map(({ name, status }, i) => {
                        // const image = API.getCatImages().then(result => {
                        //     return result.data[0].url;
                        // })
                        const dataVar = activePage * 10;
                        console.log(dataVar)
                        console.log(pets.length)
                        while (i > dataVar - 10 && i < dataVar) {
                            return (
                                <tr>
                                    <td>
                                        <img src={`https://placedog.net/50/50?id=${i + 1}`} />
                                    </td>
                                    <td key={name}>{name}</td>
                                    <td>
                                        <i id={i} key={i} ref={idRef} className={className} onClick={() => handleClick(i)}>
                                            {availability}
                                        </i>
                                    </td>
                                </tr>

                            )
                        }
                    })}
            </tbody>
            {/* <Pages className="pages" page={page} onPageChange={handlePaginationChange}>
            </Pages> */}
            <div className="ui one column stackable center aligned page grid middle aligned pages">
                <Pagination className="ui center" activePage={activePage} totalPages={getPages(pets)} onPageChange={onChange}/>
            </div>
        </>
    );
};

export default DataBody;