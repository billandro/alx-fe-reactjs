import React, { useState } from 'react'

function RegistrationForm() {
    const [userName, setUserName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!userName.trim() || email.trim() || password.trim()) {
            return;
        }
        setUserName("");
        setEmail("");
        setPassword("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                placeholder="Username"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
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