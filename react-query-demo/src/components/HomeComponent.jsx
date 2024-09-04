// HomeComponent.js
import React from 'react';
import { Link } from 'react-router-dom';

function HomeComponent() {
    return (
        <div>
            <h1>Home Page</h1>
            <Link to="/posts">Go to Posts</Link>
        </div>
    );
}

export default HomeComponent;