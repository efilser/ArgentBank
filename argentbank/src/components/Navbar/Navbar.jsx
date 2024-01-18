import '../../styles/main.css';
import './Navbar.css';
import logo from '../../assets/argentBankLogo.webp';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { signOut } from '../../redux/actions/authActions';

function Navbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const user = useSelector((state) => state.auth.user);

  const handleSignOut = (e) => {
    e.preventDefault();
    dispatch(signOut());
    navigate('/');
  };

  return (
    <nav className="main-nav">
      <Link to={"/"} className='main-nav-logo'>
        <img
          className="main-nav-logo-image"
          src={logo}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>
      <div>
      {isAuthenticated ? 
      <Link to="/profile" className='main-nav-item'>
        <i className="fa fa-user-circle"></i>
        {user?.userName}
      </Link>
      : null}
      <Link to={isAuthenticated ? "/" : "/login"} className='main-nav-item' onClick={isAuthenticated ? handleSignOut : undefined}>
        {isAuthenticated ? <i className="fa fa-sign-out"></i> : <i className="fa fa-user-circle"></i>}
        {isAuthenticated ? "Sign Out" : "Sign In"}
      </Link>
      </div>
    </nav>
  );
}

export default Navbar;
