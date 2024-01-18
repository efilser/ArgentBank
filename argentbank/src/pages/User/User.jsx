import '../../styles/main.css';
import './User.css';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Account from '../../components/Account/Account';
import { updateUserName } from '../../redux/actions/authActions';

function User() {
  const user = useSelector((state) => state.auth.user);
  const [isEditing, setIsEditing] = useState(false); // État pour gérer l'affichage du formulaire
  const dispatch = useDispatch();

  const handleEdit = (e) => {
    e.preventDefault();
    setIsEditing(true); // Mettre à jour l'état pour afficher le formulaire
  };

  const handleCancel = (e) => {
    e.preventDefault();
    setIsEditing(false); // Mettre à jour l'état pour revenir au header
  };

  const handleSave = async (e) => {
    e.preventDefault();
    const newUserName = e.target.elements.userName.value;
    dispatch(updateUserName(newUserName));
    setIsEditing(false);
  };

  return (
    <main className="main bg-dark">
      {isEditing ? ( // Vérifier si le formulaire doit être affiché
        <form className="header-edit-form" onSubmit={handleSave}>
          <h1>Edit user info</h1>
          <div className="edit-form-elts">
            <label htmlFor="userName">User name: </label>
            <input type="text" id="userName" defaultValue={user?.userName}/>
          </div>
          <div className="edit-form-elts">
            <label htmlFor="firstName">First name: </label>
            <input type="text" id="firstName" value={user?.firstName} disabled/>
          </div>
          <div className="edit-form-elts">
            <label htmlFor="lastName">Last name: </label>
            <input type="text" id="lastName" value={user?.lastName} disabled/>
          </div>
          <div className="edit-form-buttons">
          <button className="edit-form-button">Save</button>
          <button className="edit-form-button" onClick={handleCancel}>Cancel</button>
          </div>
        </form>
      ) : (
        <header className="header">
          <h1>
            Welcome back
            <br />
            {user?.firstName} {user?.lastName}
          </h1>
          <button className="edit-button" onClick={handleEdit}>
            Edit Name
          </button>
        </header>
      )}
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
