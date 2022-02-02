import React, { useEffect, useState, useRef } from "react";
import API from "../utils/API";

function DataBody({ pets, value }) {
    console.log(pets)
    const [className, setClassName] = useState(value);
    const [id, setId] = useState(0);
    const [availability, setAvailability] = useState("Available")
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
        console.log(document.get)
        // setClassName((value))
        // document.querySelector(`.${i}`).textContent = availabilityValue
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
                const image = API.getCatImages().then(result => {
                    return result.data[0].url;
                })
                    return (
                        <tr>
                            <td>
                                <img src={`https://api.thecatapi.com/v1/images/search`} />
                            </td>
                            <td key={name}>{name}</td>
                            <td>
                                <i  id={i} key={i} ref={idRef} className={className} onClick={() => handleClick(i)}>
                                    Available
                                </i>
                            </td>
                        </tr>
                    )
            })}
        </tbody>
    );
};

export default DataBody;