import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { signIn, getProfile } from '../../redux/actions/authActions';
import '../../styles/main.css';
import './SignIn.css';

function SignIn() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const error = useSelector((state) => state.auth.error);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const email = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    dispatch(signIn({ email, password })).then(() => {
      dispatch(getProfile());
      if (localStorage.getItem('token')) {
        navigate('/profile');
      }
    });
  };

  return (
  <main className="main bg-dark">
    <section className="sign-in-content">
      <i className="fa fa-user-circle sign-in-icon"></i>
      <h1>Sign In</h1>
      <form onSubmit={handleSubmit}>
        <div className="input-wrapper">
          <label htmlFor="username">Username</label>
          <input 
            type="text"
            id="username"
            required
            />
        </div>
        <div className="input-wrapper">
          <label htmlFor="password">Password</label>
          <input 
          type="password"
          id="password"
          required
          />
        </div>
        <div className="input-remember">
          <input type="checkbox" id="remember-me" />
          <label htmlFor="remember-me">Remember me</label>
        </div>
        <button className="sign-in-button">Sign In</button>
      </form>
      {error && <p>{error}</p>}
    </section>
  </main>
  );
}

export default SignIn;
