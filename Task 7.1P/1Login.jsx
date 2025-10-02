import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import { useNavigate, Link } from 'react-router-dom';

export default function Login() {
  const [email, setEmail]       = useState('');
  const [password, setPassword] = useState('');
  const [error, setError]       = useState('');
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    setError('');
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/home');
    } catch (err) {
      setError('Invalid email or password.');
    }
  }

  return (
    <div className="container">
      <div className="card login-card">
        <h3>Login</h3>
        <form onSubmit={handleSubmit}>
          <label>Your email</label>
          <input type="email" value={email} onChange={e=>setEmail(e.target.value)} />
          <label>Your password</label>
          <input type="password" value={password} onChange={e=>setPassword(e.target.value)} />
          {error && <p className="error">{error}</p>}
          <button type="submit">Login</button>
        </form>
        <p>Don't have an account? <Link to="/signup">Sign up</Link></p>
      </div>
    </div>
  );
}
