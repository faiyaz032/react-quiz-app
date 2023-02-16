import React from 'react';
import Quiz from '../pages/Quiz/Quiz';
import '../styles/App.css';
import Layout from './Layout/Layout';

import { Route, Routes } from 'react-router-dom';
import { AuthProvider } from '../contexts/AuthContext';
import Home from '../pages/Home/Home';
import Login from '../pages/Login/Login';
import Result from '../pages/Result/Result';
import Signup from '../pages/Signup/Signup';
export default function App() {
  return (
    <AuthProvider>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/quiz" element={<Quiz />}></Route>
          <Route path="/result" element={<Result />}></Route>
        </Routes>
      </Layout>
    </AuthProvider>
  );
}
