import axios from 'axios'


export const client = axios.create({
    baseURL:"https://api.pexels.com/v1/",
    headers:{
        Authorization: `M8W3yCuEfKmBho8lK9Vt00pRDsLRjpwH0kCsYmoP8s5Kp0XLnSadUGJr`
    }
}) 