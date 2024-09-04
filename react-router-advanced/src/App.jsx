import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import Profile from './components/Profile';
import ProfileForm from './components/ProfileForm';
import ProfileDetails from './components/ProfileDetails';

function App() {
  return (
    <Router>
      <div>
        <nav>
        </nav>
        <Routes>
          <Route path="/" element={<Profile />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/profile-form" element={<ProfileForm />} />
          <Route path="/profile-details/:id" element={<ProfileDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
