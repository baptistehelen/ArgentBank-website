import { useSelector, useDispatch } from 'react-redux';
import { profileUser } from '../slices/ProfileSlice';
import { useEffect, useState} from 'react';

import EditProfile from '../components/EditProfile/EditProfile'; 

export function Profile() {
  const dispatch = useDispatch();
  const { profile, error } = useSelector(state => state.profile);

  const { user } = useSelector(state => state.signIn);
  const [updateProfile, setUpdateProfile] = useState(false);

  const handleProfileUpdate = () => {
    setUpdateProfile(prevState => !prevState);
  };
  
  const [open, setOpen] = useState(false); 


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
          <h1>
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
                {profile.body.firstName} {profile.body.lastName} - {profile.body.userName}
              </>
            )}
          </h1>
          <button className="edit-button" onClick={handleClick}>Edit Name</button>
        </div>
        {open && <EditProfile maj={handleProfileUpdate} handleClick={handleClick}/>} 
        <h2 className="sr-only">Accounts</h2>
        <section className="account">
          <div className="account-content-wrapper">
            <h3 className="account-title">Argent Bank Checking (x8349)</h3>
            <p className="account-amount">$2,082.79</p>
            <p className="account-amount-description">Available Balance</p>
          </div>
          <div className="account-content-wrapper cta">
            <button className="transaction-button">View transactions</button>
          </div>
        </section>
        <section className="account">
          <div className="account-content-wrapper">
            <h3 className="account-title">Argent Bank Savings (x6712)</h3>
            <p className="account-amount">$10,928.42</p>
            <p className="account-amount-description">Available Balance</p>
          </div>
          <div className="account-content-wrapper cta">
            <button className="transaction-button">View transactions</button>
          </div>
        </section>
        <section className="account">
          <div className="account-content-wrapper">
            <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
            <p className="account-amount">$184.30</p>
            <p className="account-amount-description">Current Balance</p>
          </div>
          <div className="account-content-wrapper cta">
            <button className="transaction-button">View transactions</button>
          </div>
        </section>
      </main>
    </>
    
  );
}