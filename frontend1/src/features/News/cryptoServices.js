import axios from 'axios'

const API_URL_EXT = 'https://coinranking1.p.rapidapi.com/coins';

// Get Crypto News
const getNews = async () => {
    const config = {
        params: {
            referenceCurrencyUuid: 'yhjMzLPhuIDl',
            timePeriod: '24h',
            'tiers[0]': '1',
            orderBy: 'marketCap',
            orderDirection: 'desc',
            limit: '50',
            offset: '0'
          },
        headers: {
            'X-RapidAPI-Key': 'c44a99eb60msh2694cacd04d5bb0p1d6dd9jsnb132a4a5958c',
            'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
        }
    }

    const response = await axios.get(API_URL_EXT, config)
    return response.data
}

const cryptoNewsService = {
    getNews,
}

export default cryptoNewsService;