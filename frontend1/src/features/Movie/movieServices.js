import axios from 'axios'

const API_URL = 'https://unogs-unogs-v1.p.rapidapi.com/search/titles';
const Detail_URL =  'https://unogs-unogs-v1.p.rapidapi.com/title/details';
const Rating_URL = 'https://imdb8.p.rapidapi.com/title/get-ratings';
const Plot_URL = 'https://imdb8.p.rapidapi.com/title/get-plots';

// Get Netflix Movies

const getMovies = async () => {
    const config = {
        headers: {
            'X-RapidAPI-Key': 'c44a99eb60msh2694cacd04d5bb0p1d6dd9jsnb132a4a5958c',
            'X-RapidAPI-Host': 'unogs-unogs-v1.p.rapidapi.com'
          }
    }

    const response = await axios.get(API_URL, config)
    return response.data
}
 const getMovieDetails = async (id) => {
    const config = {
        params: {netflix_id: id},
        headers: {
          'X-RapidAPI-Key': 'c44a99eb60msh2694cacd04d5bb0p1d6dd9jsnb132a4a5958c',
          'X-RapidAPI-Host': 'unogs-unogs-v1.p.rapidapi.com'
        }
      }
      const response = await axios.get(Detail_URL, config)
      return response.data
 }

 const getMovieRating = async (id) => {
    const config = {
        params: {tconst: id},
        headers: {
          'X-RapidAPI-Key': 'c44a99eb60msh2694cacd04d5bb0p1d6dd9jsnb132a4a5958c',
          'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
        }
    }
    const response = await axios.get(Rating_URL, config)
    return response.data
 }

 const getMoviePlot = async (id) => {
    const config = {
        params: {tconst: id},
        headers: {
          'X-RapidAPI-Key': 'c44a99eb60msh2694cacd04d5bb0p1d6dd9jsnb132a4a5958c',
          'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
        }
    }

    const response = await axios.get(Plot_URL, config)
    return response.data
 }

const movieServices = {
    getMovies,
    getMovieDetails,
    getMovieRating,
    getMoviePlot,
}

export default movieServices;