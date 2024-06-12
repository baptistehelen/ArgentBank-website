import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className="error-page">
            <h1>404</h1>
            <p>Oops! Page not found.</p>
            <Link to="/" className="error-page-link">Go back to Home</Link>
        </div>
    );
};

export default ErrorPage;
