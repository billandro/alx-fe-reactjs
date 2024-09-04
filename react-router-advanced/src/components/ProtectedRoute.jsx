import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes, Navigate } from 'react-router-dom';
import useAuth from './useAuth';

// Custom Route component that checks for authentication
const ProtectedRoute = ({ element }) => {
    const isAuthenticated = useAuth();

    return isAuthenticated ? element : <Navigate to="/login" replace />;
};

export default ProtectedRoute;