import React, { useState, useEffect } from 'react';
import './login.css'

const Login = () => {
  const [userName, setUserName] = useState(localStorage.getItem('userName') || '');
  const [userInput, setUserInput] = useState({ userName: '', password: '' });

  useEffect(() => {
    setUserName(localStorage.getItem('userName') || '');
  }, []);

  const loginUser = async () => {
    await loginOrCreate('/api/auth/login');
  };

  const createUser = async () => {
    await loginOrCreate('/api/auth/create');
  };

  const loginOrCreate = async (endpoint) => {
    const response = await fetch(endpoint, {
      method: 'post',
      body: JSON.stringify({ email: userInput.userName, password: userInput.password }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });

    if (response.ok) {
      localStorage.setItem('userName', userInput.userName);
      setUserName(userInput.userName);
    } else {
      const body = await response.json();
      console.error(`⚠ Error: ${body.msg}`);
    }
  };

  return (
    <div className="login-container">
      <h1>Welcome to Battleship Lite!</h1>

      {/* Displayed when needing authentication */}
      <div className="login-form">
        <div className="input-group mb-3">
          <span className="input-group-text">@</span>
          <input
            className="form-control"
            type="text"
            placeholder="username here"
            value={userInput.userName}
            onChange={(e) => setUserInput({ ...userInput, userName: e.target.value })}
          />
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text">🔒</span>
          <input
            className="form-control"
            type="password"
            placeholder="password"
            value={userInput.password}
            onChange={(e) => setUserInput({ ...userInput, password: e.target.value })}
          />
        </div>
        <button type="button" className="btn btn-primary" onClick={loginUser}>
          Login
        </button>
        <button type="button" className="btn btn-primary" onClick={createUser}>
          Create
        </button>
      </div>
    </div>
  );
};

export default Login;
