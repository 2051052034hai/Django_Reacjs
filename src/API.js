import axios  from "axios";
import cookie from "react-cookies";


export const endpoint = {
    'categories': '/categories/',
    'products': '/products/',
    'getProduct': (productId) => `/products/${productId}/get/`,
    'register': "/users/", 
    'login': '/o/token/',
    'current-user': '/users/current-user/',
    'bill': "/bills/",
}

export default axios.create({
    baseURL:'http://127.0.0.1:8000',
    headers: {
        'Content-Type': 'multipart/form-data'
      }
})

export const authAPI = () => axios.create({
    baseURL: "http://127.0.0.1:8000",
    headers: {
        "Authorization": `Bearer ${cookie.load('access-token')}`
    }
})