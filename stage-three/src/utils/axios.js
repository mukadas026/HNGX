import axios from 'axios'


export const client = axios.create({
    baseURL:"https://pixabay.com/api/",
    // params:{
        // key: `32365943-f1486da9d0648c7d76b7c7edb`,
        // q: "cars",
        // type:"photo"
    // }
}) 