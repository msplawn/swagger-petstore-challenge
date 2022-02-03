//imports axios for API calls
import axios from "axios";


export default {
    // Gets all available pets
    getPets: () => {
        return axios.get('https://petstore.swagger.io/v2/pet/findByStatus?status=available')
    },

    getSoldPets: () => {
        return axios.get('https://petstore.swagger.io/v2/pet/findByStatus?status=sold')
    },

    updatePet: (updatedPet) => {
        const response = axios({
            method: "PUT",
            url: 'https://petstore.swagger.io/v2/pet',
            data: updatedPet
        })
        return response;
    },

    // Gets images to display in table
    getCatImages: () => {
        return axios.get('https://api.thecatapi.com/v1/images/search')
    }
};