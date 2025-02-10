import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Compontes/Login'; // Import the Login page component
import UserPage from './Compontes/UserPage'; // Import the User Info page component
import Home from './Compontes/Home'
import Search from './Compontes/Search';
import Reels from './Compontes/Reels';
import './Compontes/App.css'
import Messanger from './Compontes/Messanger';
import Massage from './Compontes/Massage';
import StoryPage from './Compontes/StoryPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} /> {/* Route to Login page */}
        <Route path="/user-info" element={<UserPage />} /> {/* Route to User Info page */}
        <Route path='/Home' element={<Home/>}/>
        <Route path='/Search' element={<Search/>}/>
        <Route path='/Reels' element={<Reels/>}/>
        <Route path='/Messanger' element={<Messanger/>}/>
        <Route path='/Massage' element={<Massage/>}/>
        <Route path='/StoryPage' element={<StoryPage/>}/>

        



      </Routes>
    </Router>
  );
};
export default App;
