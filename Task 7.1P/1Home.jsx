import React from 'react';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';
import { FaSearch } from "react-icons/fa";
import './Home.css';
export default function Home() {
  const navigate = useNavigate();
  async function logout() {
    await signOut(auth);
    navigate('/login');
  }
  return (
    <div>
      <nav className="navbar">
        <div className="nav-left">DEV@Deakin</div>

       <div className="nav-center">
         <div className="search-container">
          <FaSearch className="search-icon" />
          <input type="text" placeholder="Search..." className="search-box" />
          </div>
        </div>
        <div className="nav-right">
          <button className="btn">Post</button>
          <button className="btn logout" onClick={logout}>Logout</button>
        </div>
      </nav>

      <div className="welcome">
        <h1>Welcome to DEV@Deakin</h1>
      </div>
    </div>
  );
}
