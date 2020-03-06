import axios from 'axios';

const api = axios.create({
    baseURL: 'https://localhost:3001/api',
});

export const getAllMovies = () => api.get('/movies');

const apis = {
    getAllMovies, 
}

export default apis;