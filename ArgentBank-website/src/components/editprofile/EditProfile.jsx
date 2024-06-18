import  { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { editProfile } from '../../slices/EditProfileSlice';
import PropTypes from 'prop-types';
import InputField from '../input/InputField'; 
import "../../assets/style/App.css";

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

  return (
    <div className='edit-content'>
      <div className='edit-contentInfo'>
        <h2>Edit User Info</h2>
        <form onSubmit={handleSubmit}>
          <InputField
            id="userName"
            label="Username"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            autoComplete="username"
          />
          <InputField
            id="firstName"
            label="First Name"
            value={profile.body.firstName}
            readOnly
          />
          <InputField
            id="lastName"
            label="Last Name"
            value={profile.body.lastName}
            readOnly
          />
          {errorMessage && <div>{errorMessage}</div>}
          <button type="submit" disabled={isLoading}>Save</button>
          <button type="button" onClick={handleClick}>Cancel</button>
        </form>
      </div>
    </div>
  );
}

EditProfile.propTypes = {
  maj: PropTypes.func.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default EditProfile;
