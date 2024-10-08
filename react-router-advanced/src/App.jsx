import './App.css';
import { BrowserRouter as Router, Route, Routes, Link, useParams } from 'react-router-dom'
import Profile from './components/Profile';
import ProfileForm from './components/ProfileForm';
import BlogPost from './components/BlogPost';
import ProtectedRoute from './components/ProtectedRoute';
import Login from './components/Login';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Profile</Link>
            </li>
            <li>
              <Link to="/profile-form">Add Profile</Link>
            </li>
            <li>
              <Link to="/blog/:id">Blog</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<ProtectedRoute element={<Profile />} />} />
          <Route path="/profile/*" element={<Profile />} />
          <Route path="/profile-form" element={<ProfileForm />} />
          <Route path="/blog/:id" element={<BlogPost />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
