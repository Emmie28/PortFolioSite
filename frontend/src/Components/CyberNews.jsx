import {useState, useEffect} from 'react'
import millify from 'millify';
import { Card, Row, Col} from 'antd';
import { useSelector, useDispatch } from 'react-redux'
import { getCyberNews, reset } from '../features/News/cyberSecuritySlice';


function CyberNews() {
    const dispatch = useDispatch((state) => state.cyberNews)
    const [news, setNews] = useState([]);
    const { cyberNews } = useSelector((state) => state.cyberNews)

    useEffect(() => {
        dispatch(reset())
        dispatch(getCyberNews())
        console.log('cyber news',cyberNews)
        const filteredData = cyberNews
    
        setNews(filteredData)
    }, [])

  return (
    <div>
            <Row gutter={[32, 32]} >
            {news?.map((threats) => {
              let name = threats.title.split(" ")
              let n = ''
              for(let i = 0; i < name.length; ++i){
                if(name[i].includes('src'))
                    n = name[i];
              }
              n = n.split('=')
              n = n[1]
              return <>
                <Col xs={24} sm={12} lg={6} className='crypto-card' key={'s'}>
                    
                    
                        <Card
                            title={threats.source}
                            
                            hoverable
                        >
                            <img 
                            alt='Chinese Hackers Using New Stealthy Infection Chain to Deploy LODEINFO Malware' decoding='async' loading='lazy'
                            src = {n} />
                           {threats.title}
                        </Card>
                    
                </Col></>
        })}
        </Row>
        </div>
  )
}

export default CyberNews;