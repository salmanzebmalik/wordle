import React, { useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useState } from 'react';
import jwtDecode from 'jwt-decode';

export const Home = () => {

  const navigate = useNavigate();
  const [user, setUser] = useState("");

  function logout() {
    localStorage.removeItem('token');
    navigate('/');
  }

  function game () {
    navigate('/gamerow');
  }

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      console.log(token);
      const user = jwtDecode(token);
      if (!user) {
        localStorage.removeItem('token');
        navigate('/sign-in');
      }
      else
      {
        setUser(user.username);
      }
    }
    else {
      navigate('/sign-in');
    }
  }, [])
  
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container">
          <Link className="navbar-brand" to={"/home"}>Wordle</Link>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
              <button type="button" class="btn btn-light" onClick={logout}>Logout</button>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/history"}>History</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/leaderboard"}>Leaderboard</Link>
              </li>
            </ul>
          </div>
        </div>
    </nav>
    <div><h1>Dashboard</h1></div>
    <div><h5>Username </h5>{user}</div>
    <button onClick={game}>Play?</button>
    </>
  )
}
