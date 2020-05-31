import * as axios from "axios";

const API_KEY = '999980599119f1890b5daf0c2e763b81';

// const instance = axios.create({
//     baseURL: `https://api.themoviedb.org/3/discover/movie`
// });

const API = {

    getMovies (sortBy = 'popularity.desc', page = 1) {
        return axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-EN&sort_by=${sortBy}&page=${page}`)
            .then(response => {
                return response.data
            })
    },

    getMoviesByFetch (sortBy = 'popularity.desc', page = 1) {
        fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-EN&sort_by=${sortBy}&page=${page}`)
            .then(response => {
                return response.json()
            })
            .then(data => {
                console.log('aaaaa', data)
                return data
            })
    }

};

export default API;