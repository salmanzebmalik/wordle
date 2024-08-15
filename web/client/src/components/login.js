import React from 'react';
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import "../styles/login.css";

export const Login = () => {
    const [formValues, setformValues] = useState({email: '', password: ''});
    const navigate = useNavigate();
    async function login(e) {
        console.log(formValues);
        e.preventDefault();
        const response = await fetch('http://localhost:5000/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: formValues.email,
                password: formValues.password,
            })
        });
        const data = await response.json();
        if (response.status === 200) {
            localStorage.setItem('token', data.user);
            window.location.href = '/home';
        } else {
            alert(data.message);
            navigate('/sign-up');
        }
            
    }

    const handleChange = (e) => {
        setformValues({
            ...formValues,
            [e.target.name]: e.target.value
        });
    }

    return (
        <>
            <form>
                <h3>Sign In</h3>
                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" name="email" className="form-control" placeholder="Enter email" value={formValues.email} onChange={handleChange}/>
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" name="password" className="form-control" placeholder="Enter password"value={formValues.password} onChange={handleChange} />
                </div>
                <br/>
                <button type="submit" className="btn btn-primary btn-block" style={{backgroundColor: 'black', border: 'black'}} onClick={login}>Submit</button>
                <p className="forgot-password text-right">
                    Not <a href="./sign-up"> Registered?</a>
                </p>
            </form>
        </>
    )
}
