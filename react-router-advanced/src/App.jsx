import './App.css';
import { BrowserRouter as Router, Route, Routes, Link, useParams } from 'react-router-dom'
import Profile from './components/Profile';
import ProfileForm from './components/ProfileForm';
import BlogPost from './components/BlogPost';
import PrivateRoute from './components/PrivateRoute';
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
              <Link to="/blog/1">Blog</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<PrivateRoute element={<Profile />} />} />
          <Route path="/profile/*" element={<Profile />} />
          <Route path="/profile-form" element={<ProfileForm />} />
          <Route path="/blog" element={<BlogPost />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
