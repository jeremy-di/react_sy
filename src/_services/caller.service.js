import axios from "axios";
import { userService } from "./user.service";

const Base = axios.create({
    baseURL : "http://localhost:8000"
})

Base.interceptors.request.use(request => {
    if ( userService.isLogged() ) {
        request.headers.Authorization = `bearer ${userService.getToken()}`
    }
    return request
})

Base.interceptors.response.use(response => {
    return response
}, error => {
    if ( error.response.status === 401 ) {
        userService.logout()
        window.location = '/login'
    } else {
        return Promise.reject(error)
    }
})

export default Base