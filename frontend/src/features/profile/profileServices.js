import axios from 'axios'

const API_URL = 'api/profile/'

// Create new profile
const createProfile = async (profileData, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const response = await axios.post(API_URL, profileData, config)

    return response.data
}

// Get user profile
const getProfile = async ( token ) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const response = await axios.get(API_URL, config)

    return response.data
}

const profileServices = {
    createProfile,
    getProfile,
}

export default profileServices