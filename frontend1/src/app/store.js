import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';
import goalReducer from '../features/goals/goalSlice';
import cryptoReducer from '../features/News/cryptoSlice';
import cyberSecurity from '../features/News/cyberSecuritySlice';
import resumeReducer from '../features/Resume/resumeSlice';
import movieReducer from '../features/Movie/movieSlice';
import profileReducer from '../features/profile/profileSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    goals: goalReducer,
    news: cryptoReducer,
    movies: movieReducer,
    cyberNews: cyberSecurity,
    resume: resumeReducer,
    profile: profileReducer,
  },
});
