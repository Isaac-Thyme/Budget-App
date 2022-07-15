import './Header.css';

function Header() {
    return (
        <div id="header">
            <a id="title" href="/">Music App</a>
            <div>
                <a href="/login">Login</a>
                <a href="/signup">Signup</a>
            </div>
        </div>
    );
}

export default Header;