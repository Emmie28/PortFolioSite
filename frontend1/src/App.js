import React from 'react';
import { BrowserRouter as Router, Routes, Route, useParams } from 'react-router-dom';
import Header from './Components/Header';
import './App.css';
import Body from './Components/Body';
import Login from './Components/Login';
import Cryptos from './Components/Cryptos';
import { useSelector } from 'react-redux';
import Register from './Components/Register';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { LinearProgress } from '@material-ui/core';
import { Layout } from 'antd';
import CyberNews from './Components/CyberNews';
import ResumeBuilder from './Components/ResumeBuilder';
import NetflixMovieDatabase from './Components/NetflixMovieDatabase';
import MovieDetails from './Components/MovieDetails';
import ProfileForm from './Components/ProfileForm';
import ResumeDisplay from './Components/ResumeDisplay';

function App() {
  const { isLoading} = useSelector(
    (state) => state.goals
)
const { movieID } = useParams();
  return (
    <>
    
    <Router>
      
    <div className='app'>
    <div className='navbar'>
        <Header />
    </div>
      <div className='main'>
        <Layout>
        <div className='routes'>
      <Routes>
        <Route path='/' element={<Body />} />
        <Route path='/Login' element={<Login />} />
        <Route path='Register' element={<Register />} />
        <Route path='/Profile' element={<ProfileForm />} />
        <Route path='/Cryptocurrencies' element={<Cryptos />} />
        <Route path='/CyberSecurityNews' element={<CyberNews />} />
        <Route path='/ResumeBuilder' element={<ResumeBuilder />} />
        <Route path='/ResumeDisplay' element={<ResumeDisplay />} />
        <Route path='/NetflixMovieDatabase' element={<NetflixMovieDatabase />} />
        <Route path='/MovieDetails/:movieID' element={<MovieDetails />} />

      </Routes>
      </div>
      </Layout>
    </div>
    </div>
    </Router>
    
    <ToastContainer />
      
    </>
    
  );
}

export default App;
