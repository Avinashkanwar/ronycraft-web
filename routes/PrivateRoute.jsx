import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

// Simple authentication placeholder. Replace with real auth logic.
const isAuthenticated = true; // Set to false to simulate unauthenticated user.

const PrivateRoute = () => {
    return isAuthenticated ? <Outlet /> : <Navigate to="/" replace />;
};

export default PrivateRoute;
