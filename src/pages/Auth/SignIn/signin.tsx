import React, { useState, ChangeEvent, FormEvent, useEffect} from "react";
import { Link } from "react-router-dom";
import './signin.css';

interface SignInProps {
  onSignIn: (email: string, password: string) => void;
  onSignUpClick: () => void;
}

const SignIn: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [emailError, setEmailError] = useState<string>("");
  const [passwordError, setPasswordError] = useState<string>("");
  const [attemptedSignIn, setAttemptedSignIn] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  const onSignIn =(email:any,password:any)=>{
  console.log(email,password)
  }
  const onSignUpClick =()=>{

  }
  useEffect(() => {
    if (attemptedSignIn) {
      validateEmail();
    }
  }, [email]);
  useEffect(() => {
    if (attemptedSignIn) {
      validatePassword();
    }
  }, [password]);

  const validateEmail = () => {
    if (email === "") {
      setEmailError("Email is required");
    } else if (!emailRegex.test(email)) {
      setEmailError("Email is invalid.");
    } else {
      setEmailError("");
    }
  };

  const validatePassword = () => {
    if (!password) {
      setPasswordError("Password is required");
    } else {
      setPasswordError("");
    }
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    setAttemptedSignIn(true);
    validateEmail();
    validatePassword();

    if (email && password && !emailError && !passwordError) {
      onSignIn(email, password);
    } else {
      setErrorMessage("Invalid email or password. Please check your input.");
    }
  };

  return (
    <div className="main">
    <div className="container">
      <div className="content">
        <div className="logo">
        <Link to="/">
      <img src="/images/logo.png" alt="Your Logo" />
    </Link>
            </div>
        <div className="welcome-text">
        <span>Welcome back!</span></div>
        <div className="form-container">
      <div className="form">
        <label htmlFor="email" className="label">
          Email
        </label>
        <div className="input-container">
          <input
            id="email"
            value={email}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setEmail(e.target.value)
            }
            onBlur={validateEmail}
            placeholder="Enter your email address"
            className={`input ${emailError ? "error" : ""}`}
          />
        </div>
        {emailError && <p className="error-message">{emailError}</p>}

        <label htmlFor="password" className="label">
          Password
        </label>
        <div className="input-container">
          <input
            id="password"
            value={password}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setPassword(e.target.value)
            }
            onBlur={validatePassword}
            placeholder="Enter your password"
            type="password"
            className={`input ${
              attemptedSignIn && passwordError ? "error" : ""
            }`}
          />
        </div>
        {attemptedSignIn && passwordError && (
          <p className="error-message">{passwordError}</p>
        )}
        <div className="forgot-password">
        <span>
  Forgot Password? <Link to="#" style={{ fontWeight: 600 }}>Click Here</Link>
</span>


        </div>
        <button
          type="submit"
          onClick={handleSubmit}
          disabled={!!emailError || !!passwordError}
          className={`submit-button ${
            emailError || passwordError ? "disabled" : ""
          }`}
        >
          Sign In
        </button>
        <p className="not-member">
  Not a member? <Link to="#" onClick={onSignUpClick} style={{ fontWeight: 600 }}>Sign Up</Link>
</p>

      </div>
    </div>
 </div>
</div>
</div>

    
  );
};

export default SignIn;
