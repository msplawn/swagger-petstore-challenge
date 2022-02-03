//imports axios for API calls
import axios from "axios";


export default {
    // Gets all available pets
    getPets: () => {
        return axios.get('https://petstore.swagger.io/v2/pet/findByStatus?status=available')
    },

    // Gets all sold pets
    getSoldPets: () => {
        return axios.get('https://petstore.swagger.io/v2/pet/findByStatus?status=sold')
    },

    // Updates pets
    updatePet: (updatedPet) => {
        const response = axios({
            method: "PUT",
            url: 'https://petstore.swagger.io/v2/pet',
            data: updatedPet
        })
        return response;
    },

};