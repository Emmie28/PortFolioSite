import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import movieServices from './movieServices'

const initialState = {
    movies: [],
    movieDetail: [],
    movieRating: [],
    moviePlot: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''
}

// Get Movies
export const getMovies = createAsyncThunk('movies/getMovies', async (_,thunkAPI) => {
    try {
        return await movieServices.getMovies()
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

// Get Movie Details
export const getMovieDetails = createAsyncThunk('movieDetails/getMovieDetails', async (id,thunkAPI) => {
    try {
        return await movieServices.getMovieDetails(id)
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

// Get Movie Rating
export const getMovieRating = createAsyncThunk('movieRating/getMovieRating', async (id,thunkAPI) => {
    try {
        return await movieServices.getMovieRating(id)
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

// Get Movie Plot
export const getMoviePlot = createAsyncThunk('moviePlot/getMoviePlot', async (id,thunkAPI) => {
    try {
        return await movieServices.getMoviePlot(id)
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})


export const movieSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {
        reset: (state) => initialState
    },
    extraReducers: (builder) => {
        builder
            .addCase(getMovies.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getMovies.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.movies = action.payload
                
            })
            .addCase(getMovies.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
            .addCase(getMovieDetails.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getMovieDetails.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.movieDetail = action.payload
                
            })
            .addCase(getMovieDetails.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
            .addCase(getMovieRating.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getMovieRating.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.movieRating = action.payload
                
            })
            .addCase(getMovieRating.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
            .addCase(getMoviePlot.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getMoviePlot.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.moviePlot = action.payload
                
            })
            .addCase(getMoviePlot.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
    }
})

export const { reset } = movieSlice.actions
export default movieSlice.reducer