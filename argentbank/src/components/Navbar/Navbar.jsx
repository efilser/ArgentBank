import '../../styles/main.css';
import './Navbar.css';
import logo from '../../assets/argentBankLogo.webp';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { deleteToken } from '../../redux/actions/authATest';

function Navbar() {
  const dispatch = useDispatch();
  const authChecked = useSelector((state) => state.auth.authChecked);
  const userName = useSelector((state) => state.auth.userName);

  const handleSignOut = () => {
    dispatch(deleteToken());
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
      <Link to={authChecked ? "/" : "/login"} className='main-nav-item' onClick={authChecked ? handleSignOut : null}>
        {authChecked ? <i className="fa fa-sign-out"></i> : <i className="fa fa-user-circle"></i>}
        {authChecked ? "Sign Out" : "Sign In"}
      </Link>
      {userName && (
        <div className="main-nav-user">
          <span>{userName}</span>
        </div>
      )}
    </nav>
  );
}

export default Navbar
