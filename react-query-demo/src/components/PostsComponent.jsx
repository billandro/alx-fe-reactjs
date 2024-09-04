import React from 'react';
import { useQuery } from 'react-query';

const fetchPosts = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    return response.json();
};

import React, { useMemo } from 'react';

const ExpensiveComponent = ({ data }) => {
    // Use useMemo to cache the result of the expensive computation
    const computedData = useMemo(() => {
        // Perform expensive computation
        return data.reduce((acc, item) => acc + item.value, 0);
    }, [data]); // Recompute only when data changes

    return <div>Computed Value: {computedData}</div>;
};

function PostsComponent() {
    const { data, isError, isLoading } = useQuery('fetchPosts', fetchPosts);

    if (isLoading) return <div>Loading...</div>
    if (isError) return <div>Error Loading data</div>

    return (
        <div>
            {() => data.map(item => {
                <div key={item.key}>{item.name}</div>
            })}
        </div>
    )
}

export default PostsComponent;