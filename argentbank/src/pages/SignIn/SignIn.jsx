import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginUser, getToken } from '../../redux/actions/authATest';
import '../../styles/main.css';
import './SignIn.css';

function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (event) => {
    const { id, value } = event.target;
    if (id === 'username') {
      setEmail(value);
    } else if (id === 'password') {
      setPassword(value);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(loginUser(email, password))
      .then((response) => {
        const token = getToken(response);
        if (token) {
          navigate("/profile");
        } else {
          setError(true);
        }
      })
      .catch(() => setError(true));
  };
  return (
  <main className="main bg-dark">
    <section className="sign-in-content">
      <i className="fa fa-user-circle sign-in-icon"></i>
      <h1>Sign In</h1>
      <p>{error && "Invalid email or password"}</p>
      <form onSubmit={handleSubmit}>
        <div className="input-wrapper">
          <label htmlFor="username">Username</label>
          <input 
            type="text" 
            id="username" 
            onChange={handleChange}
            required
          />
        </div>
        <div className="input-wrapper">
          <label htmlFor="password">Password</label>
          <input 
            type="password" 
            id="password" 
            onChange={handleChange} 
            required
          />
        </div>
        <div className="input-remember">
          <input type="checkbox" id="remember-me" />
          <label htmlFor="remember-me">Remember me</label>
        </div>
        <button className="sign-in-button">Sign In</button>
      </form>
    </section>
  </main>
  );
}

export default SignIn;
