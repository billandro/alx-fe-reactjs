import React from 'react';
import useProfileStore from './profileStore';
import { Routes, Route, Link, useParams, Outlet } from 'react-router-dom';
import ProfileDetails from './ProfileDetails';
import ProfileSettings from './ProfileSettings';

function Profile() {
    const profiles = useProfileStore((state) => state.profiles);

    return (
        <div>
            <div>
                {profiles.map((item) => (
                    <div key={item.id} style={{ border: "1px solid white", margin: "10px", padding: "10px" }}>
                        <h2>
                            <Link to={`/profile/${item.id}`}>{item.name}</Link> {/* Link to ProfileDetails */}
                        </h2>
                        <p>{item.description}</p>
                    </div>
                ))}
            </div>
            <button>
                <Link to="/profile-form">Add A Profile</Link>
            </button>

            {/* Nested Routes */}
            <Routes>
                <Route path="profile-settings" element={<ProfileSettings />} />
                <Route path=":id" element={<ProfileDetails />} />
            </Routes>
        </div>
    );
}

export default Profile;