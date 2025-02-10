import React, { useState } from 'react';
import { useNavigate,Link } from 'react-router-dom';
const Login = () => {
  
  const [user, setUser] = useState({
    username: '',
    password: ''
  });

  const navigate = useNavigate();
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value
    });
  };
  
  const handleLogin = (e) => {
    e.preventDefault(); 
    if (user.username==="umaretiyalakki@gmail.com" && user.password==="Lakki@28100") {
     
      navigate('/Home');
    } else {
      alert('Please enter valid username and password');
    }
  };
  return (
    <div className="container">
      <div className="mobile-preview">
        <img height={660} width={300} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREfzadqGjzMLMJgEyAq4FsqyZZQL9QcS5mDQ&s" alt="Mobile Preview" className="mobile-image" />
      </div>
      <div className="login-form">
        <h1 className="instagram-logo">Instagram</h1>
        <form onSubmit={handleLogin}>
          <input
            type="text"
            name="username"
            value={user.username}
            placeholder="Phone number, username, or email"
            className="input-field"
            onChange={handleInputChange}
          />
          <input
            type="password"
            name="password"
            value={user.password}
            placeholder="Password"
            className="input-field"
            onChange={handleInputChange}
          />
          <button type="submit" className="login-button ">
            Log In
          </button>
        </form>
        <div className="divider">
          <span>OR</span>
        </div>
        <button className="facebook-login" onClick={handleLogin} >Log in with Facebook</button>
        <br></br>
        <Link className="forgot-password active">Forgot password?</Link>

        <div className="signup-section">
          <p>
            Don't have an account? <a href="#">Sign up</a>
          </p>
        </div>

        <p className="get-app">Get the app.</p>
        <div className="app-icons">
       <img src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQW5R9hxdc546qFad-Jk4avV-f32iz8LlwiMmmOPYHlFPGENetq" alt="App Icon 1"/>
       <img src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcT2-Xt479aWXzny8NjKORIBWGbdQdBqvn1kfLP4Z7V-9CRKHURN" alt="App Icon 2"/>
       </div>

      </div>
    </div>
  );
};

export default Login;
