import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { editProfile } from '../../slices/EditProfileSlice';
import PropTypes from 'prop-types';

function EditProfile({ maj, handleClick }) {
  const [userName, setUserName] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const { profile } = useSelector(state => state.profile);

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
    <div className='edit-content'>
    <div className='edit-contentInfo'>
      <h2>Edit User Info</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="userName">UserName:</label>
          <input
            type="text"
            id="userName"
            value={userName}
            placeholder={profile.body.userName}
            onChange={(e) => setUserName(e.target.value)}
            autoComplete="username"
          />
        </div>
        <div>
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            value={profile.body.firstName}
            readOnly
            style={readonlyStyle}
          />
        </div>
        <div>
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            value={profile.body.lastName}
            readOnly
            style={readonlyStyle}
          />
        </div>
        {errorMessage && <div>{errorMessage}</div>}
        <button type="submit" disabled={isLoading}>Save</button>
        <button type="button" onClick={handleClick}>Cancel</button>
      </form>
    </div>
    </div>
  );
}

EditProfile.propTypes = {
  maj: PropTypes.any, 
  handleClick: PropTypes.any,
};


export default EditProfile;
