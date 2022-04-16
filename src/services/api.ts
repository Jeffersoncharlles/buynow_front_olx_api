import axios from 'axios'

export const api = axios.create({
    baseURL: 'https://olxpai.herokuapp.com/'
})