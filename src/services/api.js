import axios from 'axios';

// URL: /movie/now_playing &language=pt-BR &page=1

export const key = '56e5112a475bfaeea43fab0f3e85c3dd'

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3'
})

export default api;