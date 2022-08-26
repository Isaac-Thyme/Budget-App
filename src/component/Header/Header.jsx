import './Header.css';
import { Link } from 'react-router-dom';

function Header() {
    let token = JSON.parse(localStorage.getItem("token"));

    // logout function
    const logout = () => {
        localStorage.removeItem("userData");
        localStorage.removeItem("token");
        window.location.reload(false);
    }

    return (
        <div id="header">
            <div id='titleDiv'>
                <Link id="title" to="/">Budget App</Link>
            </div>
            <div id='nav'>
                {
                    token ? (
                        <Link className='link' to="/" onClick={logout}>Logout</Link>
                    ) : (
                        <>
                            <Link className='link' to="/login">Login</Link>
                            <Link className='link' to="/signup">Signup</Link>
                        </>
                    )
                }
            </div>
        </div>
    );
}

export default Header;