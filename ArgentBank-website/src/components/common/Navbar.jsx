import { Link } from 'react-router-dom';
import { useSelector, useDispatch} from 'react-redux'; 
import logo from "../../assets/images/argentBankLogo.png";  
import { Logout } from "../../slices/LoginSlice";
import icon from "../../assets/images/icon-user.svg";
import power from "../../assets/images/power-icon.svg";

export function Navbar() {
  const user = useSelector(state => state.signIn.user);
  const dispatch = useDispatch();
  const { profile } = useSelector(state => state.profile);

  const handleLogout = () => {
    dispatch(Logout()); 
  };
  return (
    <nav className="main-nav">
      <Link className="main-nav-logo" to="/" onClick={user ? handleLogout : null}>
        <img
          className="main-nav-logo-image"
          src={logo}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>
      <div className='main-nav-log'>
      {user && (<div className='nav-user'><div>{profile.body.userName}</div><img alt='user icon' src={icon}/></div>)}
        <Link className="main-nav-item" to={user ? "/" : "/login"}onClick={user ? handleLogout : null}>
          {user ? (<img src={power}/>)  : 'Sign In'} 
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;