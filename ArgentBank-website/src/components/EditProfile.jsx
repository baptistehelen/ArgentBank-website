import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { editProfile } from './EditProfileSlice';
import PropTypes from 'prop-types';

function EditProfile({ maj }) {
  const [userName, setUserName] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const dispatch = useDispatch();
  const isLoading = useSelector(state => state.profile.isLoading);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(editProfile(userName))
      .unwrap()
      .then(() => {
        setUserName('');
        setErrorMessage('');
        maj();
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
  };

  const readonlyStyle = {
    backgroundColor: '#f2f2f2',
    color: '#333',
    cursor: 'not-allowed',
  };

  return (
    <div>
      <h2>Edit User Info</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="userName">UserName:</label>
          <input
            type="text"
            id="userName"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            value="Votre prénom"
            readOnly
            style={readonlyStyle}
          />
        </div>
        <div>
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            value="Votre nom"
            readOnly
            style={readonlyStyle}
          />
        </div>
        {errorMessage && <div>{errorMessage}</div>}
        <button type="submit" disabled={isLoading}>Save</button>
      </form>
    </div>
  );
}

EditProfile.propTypes = {
  maj: PropTypes.any, 
};


export default EditProfile;
