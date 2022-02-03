import React, { useState, useRef } from "react";
import { Pagination } from "semantic-ui-react";
import API from "../utils/API";

function DataBody({ pets, value }) {
    const [activePage, setActivePage] = useState(1);
    // const [page, setPage] = useState(1)
    const idRef = useRef(null)

    const handleClick = (pet, i) => {
        pet.status = "sold"
        API.updatePet(pet)
            // List updated pet
            .then(updatedPet => console.log(updatedPet))
            .catch(err => console.log(err))
        value = "check circle icon"
        const icon = document.getElementById(`${pet.id}`)
        icon.setAttribute("class", value)
        const availabilityValue = "Sold!"
        icon.textContent = `${availabilityValue}`
    }

    const onChange = async (e, pageInfo) => {
        await setActivePage(pageInfo.activePage)
    };

    const getPages = (pets) => {
        const pages = Math.round(pets.length / 10);
        return pages;
    }

    return (
        <>
            <tbody value={value}>
                {pets
                    .map((pet, i) => {
                        const dataVar = activePage * 10;
                        while (i > dataVar - 10 && i < dataVar) {
                            return (
                                <tr key={i}>
                                    <td>
                                        {pet.id}
                                    </td>
                                    <td key={pet.name}>{pet.name}</td>
                                    <td>
                                        {pet.status === "available" ? 
                                        <i id={pet.id} key={i} ref={idRef} onClick={() => handleClick(pet, i)}>
                                            <div className="status">{pet.status}</div>
                                        </i>
                                        :
                                        <i>{pet.status}</i>
                                        }
                                    </td>
                                </tr>
                            )
                        }
                    })}
            </tbody>
            <div className="ui one column stackable center aligned page grid middle aligned pages">
                <Pagination className="ui center" activePage={activePage} totalPages={getPages(pets)} onPageChange={onChange}/>
            </div>
        </>
    );
};

export default DataBody;