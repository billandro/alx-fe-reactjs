import React from 'react';
import { useQuery } from 'react-query';

const fetchData = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    return response.json();
};

function PostsComponent() {
    const { data, error, isLoading } = useQuery('fetchData', fetchData);

    if (isLoading) return <div>Loading...</div>
    if (error) return <div>Error Loading data</div>

    return (
        <div>
            {() => data.map(item => {
                <div key={item.key}>{item.name}</div>
            })}
        </div>
    )
}

export default PostsComponent;