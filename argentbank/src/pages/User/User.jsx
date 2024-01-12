import '../../styles/main.css';
import './User.css';
import { useSelector } from 'react-redux';
import Account from '../../components/Account/Account';

function User() {
  const user = useSelector((state) => state.auth.user);

  return (
    <main className="main bg-dark">
      <header className="header">
        <h1>Welcome back<br />{user?.firstName} {user?.lastName}</h1>
        <button className="edit-button">Edit Name</button>
      </header>
      <h2 className="sr-only">Accounts</h2>
      <Account 
        title="Argent Bank Checking (x8349)"
        amount="$2,082.79"
        description="Available Balance"
      />
      <Account
        title="Argent Bank Savings (x6712)"
        amount="$10,928.42"
        description="Available Balance"
      />
      <Account
        title="Argent Bank Credit Card (x8349)"
        amount="$184.30"
        description="Current Balance"
      />
    </main>
  );
}

export default User;
