import React from 'react';
import { useParams } from 'react-router-dom';
import useProfileStore from './profileStore';
import { useNavigate } from 'react-router-dom';

function ProfileDetails() {
    const { id } = useParams();
    const profiles = useProfileStore((state) => state.profiles);
    const profile = profiles.find((item) => item.id === Number(id));
    const removeProfile = useProfileStore((state) => state.removeProfile);
    const navigate = useNavigate()

    const handleClick = () => {
        if (profile) {
            removeProfile(profile.id);
            navigate("/");
            console.log(useProfileStore.getState().profiles);
        }
    };

    return (
        <div>
            {profile ? (
                <>
                    <h1>Profile Details</h1>
                    <h2>{profile.name}</h2>
                    <p>{profile.description}</p>
                    <button onClick={handleClick}>Delete Profile</button>
                </>
                ) : <p>Profile not found...</p>
            }
        </div>
    );
}

export default ProfileDetails;