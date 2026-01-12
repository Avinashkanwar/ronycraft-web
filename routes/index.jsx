import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../screens/home/Home';
import Signup from '../screens/login/Signup';
import Login from '../screens/login/Login';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

const AppRoutes = () => {
    return (
        <Routes>
            {/* Public Routes */}
            <Route element={<PublicRoute />}>
                <Route path="/" element={<Home />} />
                <Route path="/signup" element={<Signup />} />
            </Route>

            {/* Private Routes */}
            <Route element={<PrivateRoute />}>
                <Route path="/login" element={<Login />} />
            </Route>
        </Routes>
    );
};

export default AppRoutes;
