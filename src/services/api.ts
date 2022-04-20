import axios from 'axios'
import Cookies from 'js-cookie'

let bearer
const token = Cookies.get('token')
if (token) {
    bearer = JSON.parse(String(token))
}


export const api = axios.create({
    baseURL: 'https://buynowapiolx.herokuapp.com',
    headers: {
        Authorization: 'Bearer ' + bearer?.token ?? ''
    }
})