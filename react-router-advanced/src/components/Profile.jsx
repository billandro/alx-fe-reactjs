import React from 'react';
import useProfileStore from './profileStore';
import { Link } from 'react-router-dom';

function Profile() {
    const profiles = useProfileStore((state) => state.profiles);

    return (
        <div>
            <h1>Profiles</h1>
            {profiles.map((item) => (
                <div key={item.id} style={{ border: "1px solid white", margin: "10px", padding: "10px" }}>
                    <h2>
                        <Link to={`/profile-details/${item.id}`}>{item.name}</Link>
                    </h2>
                    <p>{item.description}</p>
                </div>
            ))}
            <button>
                <Link to="/profile-form">Add A Profile</Link>
            </button>
        </div>
    );
}

export default Profile;