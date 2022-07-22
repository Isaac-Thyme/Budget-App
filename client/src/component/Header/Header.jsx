import './Header.css';

function Header() {
    return (
        <div id="header">
            <div id='titleDiv'>
                <a id="title" href="/">Budget App</a>
            </div>
            <div id='nav'>
                <a href="/login">Login</a>
                <a href="/signup">Signup</a>
            </div>
        </div>
    );
}

export default Header;