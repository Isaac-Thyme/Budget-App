import { Box, InputLabel, Input, InputAdornment, Button } from "@mui/material";
import { AccountCircle } from "@mui/icons-material";
import { useState } from "react";
import axios from 'axios';
const REACT_APP_SERVER = process.env.REACT_APP_SERVER;

// Todo: Error handling for password mismatch

function Login() {

    let [userObject, setUserObject] = useState({
        username: "",
        password: ""
    });
    const [error, setError] = useState('');

    const handleSubmit = async () => {
        try {
            console.log('USER OBJECT', userObject);
            let result = await axios.post(`${REACT_APP_SERVER}/login`, userObject);
            localStorage.setItem('userData', JSON.stringify(result.data.user));
            localStorage.setItem('token', JSON.stringify(result.data.token));
            window.location = '/';
        } catch (e) {
            setError(e.message);
        }
    }

    const handleInput = (e) => {
        switch (e.target.id) {
            case "username":
                setUserObject({
                    username: e.target.value,
                    password: userObject.password
                });
                break;
            case "password":
                setUserObject({
                    username: userObject.username,
                    password: e.target.value
                });
                break;
            default:
                console.log("Something went wrong");
        }
    }

    return (
        <div id="login">
            <h1>Login</h1>
            {error ? (
                <h3 id="error">{error === 'Network Error' ? 'Servers are down...' : error}</h3>
            ) : null}
            <Box>
                {/* creating the username textfield */}
                <InputLabel htmlFor="input-with-icon-adornment">
                    Username
                </InputLabel>
                <Input
                    id="username"
                    startAdornment={
                        <InputAdornment position="start">
                            <AccountCircle />
                        </InputAdornment>
                    }
                    onChange={handleInput}
                />
                {/* creating the password textfield */}
                <InputLabel htmlFor="input-with-icon-adornment">
                    Password
                </InputLabel>
                <Input
                    id="password"
                    type="password"
                    onChange={handleInput}
                />
                <Button variant="outlined" onClick={handleSubmit} >Submit</Button>
            </Box>
        </div>
    );
}

export default Login;