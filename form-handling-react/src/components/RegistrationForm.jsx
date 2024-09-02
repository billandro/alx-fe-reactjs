import React, { useState } from 'react'

function RegistrationForm() {
    const [username, setUsername] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [errors, setErrors] = useState();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!username) {
            setErrors("Please ensure that all fields are filled in!");
            return;
        }

        if (!email) {
            setErrors("Please ensure that all fields are filled in!");
            return;
        }

        if (!password) {
            setErrors("Please ensure that all fields are filled in!");
            return;
        }

        setUsername("");
        setEmail("");
        setPassword("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <input 
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input 
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">Submit</button>
        </form>
    );
}

export default RegistrationForm;