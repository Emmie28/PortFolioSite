import {useState, useEffect} from 'react'
import millify from 'millify';
import { Card, Row, Col} from 'antd';
import { useSelector, useDispatch } from 'react-redux'
import { getCryptoNews, reset } from '../features/News/cryptoSlice';

function Cryptos() {
    const disp = useDispatch((state) => state.news)
    const { news } = useSelector((state) => state.news)
    const [cryptos, setCryptos] = useState([]);

    useEffect(() => {
        disp(reset())
        disp(getCryptoNews())

        const filteredData = news?.data?.coins
    
        setCryptos(filteredData);
    }, [])

  return (
    <div>
            <Row gutter={[32, 32]} >
            {cryptos?.map((currency) => (
              
                <Col xs={24} sm={12} lg={6} className='crypto-card' key={currency.uuid}>
                    
                    
                        <Card
                            title={`${currency.rank}. ${currency.name}`}
                            extra={<img className='crypto-image' src={currency.iconUrl} />}
                            hoverable
                        >
                            <p>Price: {millify(currency.price)}</p>
                            <p>Market Cap: {millify(currency.marketCap)}</p>
                            <p>Daily Change: {millify(currency.change)}</p>
                        </Card>
                    
                </Col>
            ))}
        </Row>
        </div>
  )
}

export default Cryptos