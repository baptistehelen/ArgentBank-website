import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { profileUser } from '../slices/ProfileSlice';
import EditProfile from '../components/editprofile/EditProfile';
import Account from '../components/accounts/Account';

export function Profile() {
  const dispatch = useDispatch();
  const { profile, error } = useSelector(state => state.profile);
  const { user } = useSelector(state => state.signIn);
  const [updateProfile, setUpdateProfile] = useState(false);
  const [open, setOpen] = useState(false);

  const handleProfileUpdate = () => {
    setUpdateProfile(prevState => !prevState);
  };

  useEffect(() => {
    dispatch(profileUser());
  }, [dispatch, updateProfile]);

  if (!user) {
    return null;
  }

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <>
      <main className="main bg-dark">
        <div className="header">
          <h1 className='profile-h1'>
            Welcome back
            {error && (
              <>
                <br />
                Une erreur s&apos;est produite : {error}
              </>
            )}
            {profile && (
              <>
                <br />
                {profile.body.firstName} {profile.body.lastName}
              </>
            )}
          </h1>
          <button className="edit-button" onClick={handleClick}>Edit Name</button>
        </div>
        {open && <EditProfile maj={handleProfileUpdate} handleClick={handleClick}/>}
        
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
    </>
  );
}
