//imports axios for API calls
import axios from "axios";


export default {
    // Gets all available pets
    getPets: () => {
        return axios.get('https://petstore.swagger.io/v2/pet/findByStatus?status=available')
    },

    // Gets images to display in table
    getCatImages: () => {
        return axios.get('https://api.thecatapi.com/v1/images/search')
    }
};