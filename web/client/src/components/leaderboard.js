import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import jwtDecode from 'jwt-decode';

export const Leaderboard = () => {

    const navigate = useNavigate();
    const [user, setUser] = useState("");

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            console.log(token);
            const user = jwtDecode(token);
            if (!user) {
                localStorage.removeItem('token');
                navigate('/sign-in');
            }
            else {
                setUser(user.username);
            }
        }
        else {
            navigate('/sign-in');
        }
    }, [])

    return (
        <>
            <a href="./home"><button>Back</button></a>
            <div>Leaderboard</div>
            <div>{user}</div>
        </>
    )
}
