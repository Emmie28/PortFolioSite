import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import profileServices from './profileServices'

const initialState = {
    profile: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''
}


// Create new profile
export const createProfile = createAsyncThunk('profile/create', async (profileData, thunkAPI) => {
    try {
        const token = thunkAPI.getState().auth.user.token
        return await profileServices.createProfile(profileData, token)
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

// Get user profile
export const getProfile = createAsyncThunk('profile/get', async (_, 
    thunkAPI) => {
        try {
            const token = thunkAPI.getState().auth.user.token
            return await profileServices.getProfile(token)
        } catch (error) {
            const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
            return thunkAPI.rejectWithValue(message)
        }
    })

export const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        reset: (state) => initialState
    },
    extraReducers: (builder) => {
        builder
            .addCase(createProfile.pending, (state) => {
                state.isLoading = true
            })
            .addCase(createProfile.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.profile.push(action.payload)
            })
            .addCase(createProfile.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
            .addCase(getProfile.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getProfile.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.profile = action.payload
            })
            .addCase(getProfile.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
    }

})

export const { reset } = profileSlice.actions
export default profileSlice.reducer
