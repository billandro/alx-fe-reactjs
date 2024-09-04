import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes, Navigate } from 'react-router-dom';

const isAuthenticated = () => {
    return true;
};

// Custom Route component that checks for authentication
const PrivateRoute = ({ element }) => {
    return isAuthenticated() ? element : <Navigate to="/login" replace />;
};

export default PrivateRoute;