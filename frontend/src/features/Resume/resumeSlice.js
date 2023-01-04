import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    profile: {},
    education: {},
    employment: {},
    skills: {},
    hobbies: [],
    languages: {},
    profileDesc: [],
}

export const resumeSlice = createSlice({
    name: 'resume',
    initialState,
    reducers:{
        addProfile: (state, action) => {
            state.profile = action.payload;
        },
        addEducation: (state, action) => {
            state.education = action.payload;
        },
        addEmployment: (state, action) => {
            state.employment = action.payload;
        },
        addSkills: (state, action) => {
                state.skills = action.payload;   
               
        },
        addHobbies: (state, action) => {
            state.hobbies = action.payload;   
           
        },
        addLanguages: (state, action) => {
        state.languages = action.payload;   
       
        },
        addProfileDesc: (state, action) => {
            state.profileDesc = action.payload;
        }
    }
});

export const { addProfile, 
                addEducation,
                addEmployment, 
                addSkills, 
                addProfileDesc,
                addHobbies,
                addLanguages, } = resumeSlice.actions;
export default resumeSlice.reducer;