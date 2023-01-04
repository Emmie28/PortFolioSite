import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import cryptoNewsService from './cryptoServices'

const initialState = {
    news: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''
}

// Get Crypto News
export const getCryptoNews = createAsyncThunk('news/getNews', async (_,thunkAPI) => {
    try {
        return await cryptoNewsService.getNews()
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

export const cryptoSlice = createSlice({
    name: 'news',
    initialState,
    reducers: {
        reset: (state) => initialState
    },
    extraReducers: (builder) => {
        builder
            .addCase(getCryptoNews.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getCryptoNews.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.news = action.payload
                
            })
            .addCase(getCryptoNews.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
    }
})

export const { reset } = cryptoSlice.actions
export default cryptoSlice.reducer