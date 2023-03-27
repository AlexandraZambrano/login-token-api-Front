import React, { useState } from 'react';
import axios from 'axios';
import jwt_decode from 'jwt-decode';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const { email, password } = formData;

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:8000/api/login_check', 
      JSON.stringify({username: email, password: password}),
        {
            headers: { 'Content-Type': 'application/json' },
            withCredentials: true
        }
      )
      const { token } = res.data;
      localStorage.setItem('token', token);
      const decoded = jwt_decode(token);
      console.log(decoded);
    } catch (err) {
      console.error(err.response.data);
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <div>
        <label>Email:</label>
        <input type="email" name="email" value={email} onChange={onChange} />
      </div>
      <div>
        <label>Password:</label>
        <input type="password" name="password" value={password} onChange={onChange} />
      </div>
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;