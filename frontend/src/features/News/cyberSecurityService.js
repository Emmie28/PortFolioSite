import axios from 'axios'

const API_URL = 'https://cyber-security-news.p.rapidapi.com/news';

// Get Cyber Security News

const getCyberNews = async () => {
    const config = {
        headers: {
            'X-RapidAPI-Key': 'c44a99eb60msh2694cacd04d5bb0p1d6dd9jsnb132a4a5958c',
            'X-RapidAPI-Host': 'cyber-security-news.p.rapidapi.com'
          }
    }

    const response = await axios.get(API_URL, config)
    return response.data
}

const cyberSecurityService = {
    getCyberNews,
}

export default cyberSecurityService;