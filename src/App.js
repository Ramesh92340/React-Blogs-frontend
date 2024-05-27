import React from 'react';
import RegistrationForm from './RegistrationForm';
import { Routes, Route } from 'react-router-dom';
import LogIn from './LogIn';
import Homepage from './blogspage/Homepage';
import AboutPage from './blogspage/AboutPage';
import ContactPage from './blogspage/ContactPage';
import ProfilePage from './blogspage/ProfilePage';

import './App.css'


const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<RegistrationForm />} />
        <Route path="/LogIn" element={<LogIn />} />
        <Route path="/Homepage" element={<Homepage />} />
        <Route path="/AboutPage" element={<AboutPage />} />
        <Route path="/ContactPage" element={<ContactPage />} />
        <Route path="/ProfilePage" element={<ProfilePage />} />
      </Routes>
    </>
  )
}
export default App;


