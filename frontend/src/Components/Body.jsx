import React from 'react';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { getGoals, reset, deleteGoal } from '../features/goals/goalSlice';
import { getCryptoNews } from '../features/News/cryptoSlice';
import { getMovies } from '../features/Movie/movieSlice';

import GoalForm from './GoalForm';
import millify from 'millify';
import { Card, Row, Col} from 'antd';
import Cryptos from './Cryptos';
import { DeleteOutlined } from '@ant-design/icons';
import { LinearProgress } from '@material-ui/core';



function Body() {
    const { user } = useSelector((state) => state.auth)
    const dispatch = useDispatch((state) => state.auth)
    const disp = useDispatch((state) => state.news)
    
    
    
    const { news } = useSelector((state) => state.news)
    const {goals, isLoading, isError, message} = useSelector((state) => state.goals)
    const [cryptos, setCryptos] = React.useState([]);
    

    useEffect(() => {
        dispatch(reset())
        disp(reset())
        disp(getCryptoNews())
    

        const filteredData = news?.data?.coins
    
        setCryptos(filteredData);
    }, [user])

    const onClick = () =>{
        dispatch(getGoals())
        dispatch(reset())
    }

  return (
    <>
    { isLoading ? (<LinearProgress />): (<></>)}
    
    { user ? (<>
        <div>
            Welcome { user.name }
        </div><br></br>
       
        <section>
            <GoalForm />
        </section>
        <button onClick={onClick}>Get user Goals</button>
        <Row gutter={[32, 32]}>
        { goals?.map((item) =>(
            
                <> 
                    
                    <Col xs={24} sm={12} lg={6} className='crypto-card' key={item._id}>
                        <Card extra={<button onClick={() => dispatch(deleteGoal(item._id))}><DeleteOutlined /></button>}> {item.text}</Card>
                    </Col>
                    
                </>
            
        ))}</Row>
        </>
        
    ) : (
        <Cryptos />
    )}
   
    
    </>
    
  )
}

export default Body