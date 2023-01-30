import axios from "axios"

const baseurl = "https://bookommerce-back.onrender.com"

export const api = axios.create({
    baseURL: baseurl,
    timeout: 4000
})