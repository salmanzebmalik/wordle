import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import {Login} from "./components/login";
import {Register} from "./components/register";
import {Home} from "./components/home";
import Gamerow from "./components/gamerow";
import {History} from "./components/history";
import {Leaderboard} from "./components/leaderboard";

function App() {
  return (<Router>
    <div className="App">
      <div className="auth-wrapper">
        <div className="auth-inner">
          <Routes>
            <Route exact path='/' element={<Login/>} />
            <Route path="/sign-in" element={<Login/>} />
            <Route path="/sign-up" element={<Register/>} />
            <Route path="/home" element={<Home/>} />
            <Route path="/gamerow" element={<Gamerow/>} />
            <Route path="/history" element={<History/>} />
            <Route path="/leaderboard" element={<Leaderboard/>} />
          </Routes>
        </div>
      </div>
    </div></Router>
  );
}
export default App;