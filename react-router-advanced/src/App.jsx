import './App.css';
import { BrowserRouter as Router, Route, Routes, Link, useParams } from 'react-router-dom'
import Profile from './components/Profile';
import ProfileForm from './components/ProfileForm';
import ProfileDetails from './components/ProfileDetails';
import BlogPost from './components/BlogPost';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/blog/:id">Blog</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Profile />} />
          <Route path="/profile/*" element={<Profile />} />
          <Route path="/profile-form" element={<ProfileForm />} />
          <Route path="/blog/:id" element={<BlogPost />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
