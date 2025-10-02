import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from '../firebase';
import { useNavigate } from 'react-router-dom';
import { doc, setDoc } from 'firebase/firestore';

export default function Signup() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName]   = useState('');
  const [email, setEmail]         = useState('');
  const [password, setPassword]   = useState('');
  const [error, setError]         = useState('');
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    setError('');
    if (!firstName || !lastName || !email || !password) {
      setError('Please fill all fields.');
      return;
    }
    try {
      const userCred = await createUserWithEmailAndPassword(auth, email, password);
      const uid = userCred.user.uid;
      // Store profile in Firestore
      await setDoc(doc(db, 'users', uid), {
        firstName, lastName, email, createdAt: new Date().toISOString()
      });
      // Redirect to login
      navigate('/login');
    } catch (err) {
      setError(err.message);
    }
  }

  return (
    <div className="container">
      <div className="card signup-card">
        <h2>Create a DEV@Deakin Account</h2>
        <form onSubmit={handleSubmit}>
          <label>First name*</label>
          <input value={firstName} onChange={e=>setFirstName(e.target.value)} />
          <label>Last name*</label>
          <input value={lastName} onChange={e=>setLastName(e.target.value)} />
          <label>Email*</label>
          <input type="email" value={email} onChange={e=>setEmail(e.target.value)} />
          <label>Password*</label>
          <input type="password" value={password} onChange={e=>setPassword(e.target.value)} />
          {error && <p className="error">{error}</p>}
          <button type="submit">Create</button>
        </form>
      </div>
    </div>
  );
}
