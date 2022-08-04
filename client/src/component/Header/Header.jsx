import './Header.css';
import { Link } from 'react-router-dom';

function Header() {
    let token = JSON.parse(localStorage.getItem("userData"));
    if (token) {
        token = token.token;
    }

    // logout function
    const logout = () => {
        localStorage.setItem("userData", JSON.stringify({}));
        window.location.reload(false);
    }

    return (
        <div id="header">
            <div id='titleDiv'>
                <Link to="/">Budget App</Link>
            </div>
            <div id='nav'>
                {
                    token ? (
                        <Link to="/" onClick={logout}>Logout</Link>
                    ) : (
                        <>
                            <Link to="/login">Login</Link>
                            <Link to="/signup">Signup</Link>
                        </>
                    )
                }
            </div>
        </div>
    );
}

export default Header;