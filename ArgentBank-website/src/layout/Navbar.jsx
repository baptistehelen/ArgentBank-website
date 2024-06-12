import { Link } from 'react-router-dom';
import { useSelector, useDispatch} from 'react-redux'; 
import logo from "./../../../designs/img/argentBankLogo.png";
import { Logout } from "../components/LoginSlice";

export function Navbar() {
  const user = useSelector(state => state.signIn.user);
  const dispatch = useDispatch();

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
      <div>
        <Link className="main-nav-item" to={user ? "/" : "/login"}onClick={user ? handleLogout : null}>
          <i className="fa fa-user-circle"></i>
          {user ? 'Logout' : 'Sign In'} 
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;