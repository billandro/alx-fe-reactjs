import { useState, useEffect } from 'react';

const useAuth = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(true);

    useEffect(() => {
        // Example logic to check if the user is authenticated
        const token = true;
        setIsAuthenticated(token ? true : false);
    }, []);

    return isAuthenticated;
};

export default useAuth;