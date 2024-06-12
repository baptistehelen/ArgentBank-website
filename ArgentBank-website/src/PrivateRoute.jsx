import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';



export function PrivateRoute({ children }) {
    const { user: authUser } = useSelector((state) => state.signIn)
    
    if (!authUser) {
        return <Navigate to="/" />
    }

    return children;
    
}

PrivateRoute.propTypes = {
    children: PropTypes.node.isRequired,};