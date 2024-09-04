import { useState, useEffect } from 'react';

const useAuth = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        // Example logic to check if the user is authenticated
        const token = localStorage.getItem('authToken');
        setIsAuthenticated(token ? true : false);
    }, []);

    return isAuthenticated;
};

export default useAuth;