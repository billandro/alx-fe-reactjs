import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import HomeComponent from './components/HomeComponent';
import PostsComponent from './components/PostsComponent';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <nav>
          <Link to="/">Home</Link> | <Link to="/posts">Posts</Link>
        </nav>
        <Routes>
          <Route path="/" element={<HomeComponent />} />
          <Route path="/posts" element={<PostsComponent />} />
        </Routes>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
