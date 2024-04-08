import Base from '../_services/caller.service'

let login = (credentials) => {
    return Base.post('/api/login_check', credentials)
}

let getProfil = () => {
    return Base.get('/api/getuser')
}

let saveToken = (token) => {
    localStorage.setItem('token', token)
}

let logout = () => {
    localStorage.removeItem('token')
}

let isLogged = () => {
    let token = localStorage.getItem('token')
    return !!token
}

let getToken = () => {
    return localStorage.getItem('token')
}

export const userService = {
    login, saveToken, logout, isLogged, getToken, getProfil
}