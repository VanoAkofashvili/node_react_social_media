// import { AUTH_TOKEN } from 'utils/const/constants'
import { store } from 'redux_tk/app/store'
import axios from 'axios'

const instance = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL
})

// set Authorization header to every axios request
instance.interceptors.request.use(function(config) {
    const token = store.getState().auth.token
    config.headers.Authorization = token

    return config
})

export default instance