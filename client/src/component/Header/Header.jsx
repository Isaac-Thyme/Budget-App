import './Header.css';

function Header() {
    let token = JSON.parse(localStorage.getItem("userData"));
    if (token) {
        token = token.token;
    }
    console.log(token);

    // logout function
    const logout = () => {
        localStorage.setItem("userData", JSON.stringify({}));
        window.location.reload(false);
    }

    return (
        <div id="header">
            <div id='titleDiv'>
                <a id="title" href="/">Budget App</a>
            </div>
            <div id='nav'>
                {
                    token ? (
                        <p onClick={logout}>Logout</p>
                    ) : (
                        <>
                            <a href="/login">Login</a>
                            <a href="/signup">Signup</a>
                        </>
                    )
                }
            </div>
        </div>
    );
}

export default Header;