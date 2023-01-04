import {useEffect} from 'react'
import {getMovies} from '../features/Movie/movieSlice';
import { useSelector, useDispatch } from 'react-redux'
import { Card, Row, Col, Rate} from 'antd';
import { LinearProgress } from '@material-ui/core';
import {Link} from 'react-router-dom';


function NetflixMovieDatabase() {
    const dispatch = useDispatch((state) => state.movies)
    const { movies, isLoading } = useSelector((state) => state.movies);
    

    useEffect(() => {
        
        dispatch(getMovies())
          
    }, [])
    const filteredMovies = movies?.results
    

    
  return (
  <>{ isLoading ? (<LinearProgress />): (<></>)}
    <div>NetflixMovieDatabase</div>
    <Row gutter={[32, 32]} >
    {
        filteredMovies !== undefined && (filteredMovies.map((item) => (
            <>
               
                    <Col xs={24} sm={12} lg={6} className='crypto-card'>
                        <Link to={`/MovieDetails/${item.netflix_id}`}>
                        <Card  
                            title={item.title}
                            hoverable
                        >
                            <img src={item.img}  width= '100%' ></img>
                            <p>Year: {item.year}</p>
                            <p>Rating: <Rate allowHalf value={item.rating} /></p>
                            <p>Duration: {(item.runtime / 60).toFixed(2)}mins</p>
                        </Card>
                        </Link>
                    </Col>
                    
                    
                
            </>
        )))
    }
    </Row>
  </>
    
  )
}

export default NetflixMovieDatabase