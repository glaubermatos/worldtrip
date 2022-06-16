import axios from "axios";

const isDevelopment = process.env.NODE_ENV === 'development' ? true : false

export const api = axios.create({
    baseURL: isDevelopment ? 'http://localhost:3000/api' : 'https://worldtrip-glauber.vercel.app/api'
})