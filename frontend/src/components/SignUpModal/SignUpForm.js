import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch } from "react-redux";

function SignUpForm() {
  const dispatch = useDispatch();
  const [credential, setCredential] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      setErrors([]);
      return dispatch(sessionActions.signup({ email, username, password }))
        .catch(async (res) => {
          const data = await res.json();
          if (data && data.errors) setErrors(data.errors);
        });
    }
    return setErrors(['Confirm Password field must be the same as the Password field']);
  };

  return (
    <form onSubmit={handleSubmit} className="entire-sign-up-form">
      <ul>
        {errors.map((error, idx) => (
          <li key={idx}>{error}</li>
        ))}
      </ul>
      <label className="modal-label-signup-login">
            Email
            </label>
            <input
              className="modal-input-signup-login"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          <label className="modal-label-signup-login">
            Username
            </label>
            <input
              className="modal-input-signup-login"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          <label className="modal-label-signup-login">
            Password
            </label>
            <input
              className="modal-input-signup-login"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          <label className="modal-label-signup-login">
            Confirm Password
            </label>
            <input
              className="modal-input-signup-login"
              id="confirm-password"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
            <br/>
          <button type="submit" className="modal-input-signup-login" id="submit">Sign Up</button>
    </form>
  );
}

export default SignUpForm;
