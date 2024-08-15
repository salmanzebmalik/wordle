import React from 'react';
import { useState } from "react";
import "../styles/login.css";

export const Register = () => {

    const [formValues, setformValues] = useState({username: '', name: '', email: '', password: ''});

    async function register(e) {

        e.preventDefault();
        console.log(formValues);

        const response = await fetch('http://localhost:5000/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: formValues.email,
                password: formValues.password,
                name: formValues.name,
                username: formValues.username,
            })
        });
    }

    const handleChange = (e) => {
        setformValues({
            ...formValues,
            [e.target.name]: e.target.value
        });
    }

    return (
        <form>
            <h3>Sign Up</h3>
            <div className="form-group">
                <label>Name</label>
                <input type="text" name="name" value={formValues.name} className="form-control" placeholder="Full name" onChange={handleChange}/>
            </div>
            <div className="form-group">
                <label>username</label>
                <input type="text" name="username" value={formValues.username} className="form-control" placeholder="Username" onChange={handleChange}/>
            </div>
            <div className="form-group">
                <label>Email address</label>
                <input type="email" name="email" value={formValues.email} className="form-control" placeholder="Enter email" onChange={handleChange}/>
            </div>
            <div className="form-group">
                <label>Password</label>
                <input type="password" name="password" value={formValues.password} className="form-control" placeholder="Enter password" onChange={handleChange}/>
            </div>
            <button type="submit" className="btn btn-primary btn-block" style={{backgroundColor: 'black', border: 'black'}} onClick={register}>Sign Up</button>
            <p className="forgot-password text-right">
                Already registered <a href="./sign-in">sign in?</a>
            </p>
        </form>
    )
}
