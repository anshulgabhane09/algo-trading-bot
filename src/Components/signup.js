import React, { useState } from "react";

import { getauth, createUserWithEmailAndPassword } from "firebase/auth";

import { Link } from "react-router-dom";

function FormValidator() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [errors, setErrors] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

  };

  return (
    <div className="Signup-container">
      <form className="Signup-form" onSubmit={handleSubmit}>
        <h2>Register With Us</h2>
        <div className="Signup-form-control">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            placeholder="Enter username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <small>{errors.username}</small>
        </div>
        <div className="Signup-form-control">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <small>{errors.email}</small>
        </div>
        <div className="Signup-form-control">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <small>{errors.password}</small>
        </div>
        <div className="Signup-form-control">
          <label htmlFor="password2">Confirm Password</label>
          <input
            type="password"
            id="password2"
            placeholder="Enter password again"
            value={password2}
            onChange={(e) => setPassword2(e.target.value)}
          />
          <small>{errors.password2}</small>
        </div>

        <button type="submit">
          <Link to="/strategies">Submit</Link>
        </button>
      </form>
    </div>
  );
}

export default FormValidator;
