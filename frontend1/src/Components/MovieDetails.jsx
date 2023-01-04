import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux'
import { useParams } from 'react-router-dom';
import {getMovieDetails, getMovieRating, getMoviePlot} from '../features/Movie/movieSlice';
import { Card, Row, Col, Rate} from 'antd';
import { LinearProgress } from '@material-ui/core';

function MovieDetails() {
    const { movieID } = useParams();

    const dispatch = useDispatch((state) => state.movies)
    const dispatch_rating = useDispatch((state) => state.movies.movieRating)
    const dispatch_plot = useDispatch((state) => state.movies.moviePlot)
   
    const movieDetails = useSelector((state) => state.movies.movieDetail);
    const movieRate = useSelector((state) => state.movies.movieRating)
    const plot = useSelector((state) => state.movies.moviePlot)
    const {isLoading} = useSelector((state) => state.movies);
    
    useEffect(() => {
        
        dispatch(getMovieDetails(movieID))
        dispatch_rating(getMovieRating(movieDetails.alt_id))
        dispatch_plot(getMoviePlot(movieDetails.alt_id))
          
    }, []);
    const text = plot?.plots
    
    const rating = (movieRate.rating / 2)
    console.log(movieRate.rating)
  return (<>
    { isLoading ? (<LinearProgress />): (<></>)}
    <div>movieDetails</div>
    <hr></hr>
    <section><h1>Title: {movieDetails.title}</h1></section>
    <div style={{display: 'flex', gap: 8 }}>
        <img src={movieDetails.large_image}></img>
        <p>
        {
        text !== undefined && (Object.entries(text).map(([key,value]) =>{
            
                return (<><p>{value.text}</p></>)
           
        }))
        }
        </p>
        
    </div><br></br>
    <p>Year: {movieDetails.year}</p>
    <p>Maturity: {movieDetails.maturity_label}</p>
    <p>Rating: <Rate allowHalf value={rating} /></p>
    <p>Duration: {(movieDetails.alt_runtime / 60).toFixed(2)}mins</p>

    <hr></hr>
    <p><b>Synopsis:</b> {movieDetails.synopsis}</p>
    
    
    
    </>)
}

export default MovieDetails