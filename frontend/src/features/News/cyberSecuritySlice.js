import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import cyberSecurityService from './cyberSecurityService'

const initialState = {
    cyberNews: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''
}

// Get Crypto News
export const getCyberNews = createAsyncThunk('news/getCyberNews', async (_,thunkAPI) => {
    try {
        return await cyberSecurityService.getCyberNews()
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

export const cyberSecuritySlice = createSlice({
    name: 'cyberNews',
    initialState,
    reducers: {
        reset: (state) => initialState
    },
    extraReducers: (builder) => {
        builder
            .addCase(getCyberNews.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getCyberNews.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.cyberNews = action.payload
                
            })
            .addCase(getCyberNews.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
    }
})

export const { reset } = cyberSecuritySlice.actions
export default cyberSecuritySlice.reducer