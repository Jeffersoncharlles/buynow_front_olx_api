import axios from 'axios'
import Cookies from 'js-cookie'

const token = Cookies.get('token')


export const api = axios.create({
    baseURL: 'https://olxpai.herokuapp.com',
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
        'accept': 'application/json'
    }
})