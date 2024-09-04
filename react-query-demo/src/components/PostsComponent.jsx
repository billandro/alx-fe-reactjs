import React, { useMemo } from 'react';
import { useQuery } from 'react-query';

const fetchPosts = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    return response.json();
};

function PostsComponent() {
    const { data, error, isError, isLoading, refetch } = useQuery('fetchPosts', fetchPosts, {
        cacheTime: 1000 * 60 * 5, // Cache data for 5 minutes
        staleTime: 5000, // Data considered fresh for 1 minute
        refetchOnWindowFocus: false, // Do not refetch on window focus
        keepPreviousData: true, // Keep previous data while fetching new data
    });

    if (isLoading) return <div>Loading...</div>;
    if (isError) return <div>Error loading data: {error.message}</div>;

    return (
        <div>
            <button onClick={() => refetch()}>Refetch Posts</button>
            {data.map(item => (
                <div style={{ border: "1px solid white" }} key={item.id}>{item.title}</div>
            ))}
        </div>
    )
}

export default PostsComponent;