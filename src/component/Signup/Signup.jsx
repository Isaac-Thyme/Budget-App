import './Signup.css';
import { InputLabel, Input, InputAdornment, Button } from "@mui/material";
import { AccountCircle } from "@mui/icons-material";
import { useState, useRef } from "react";
import axios from 'axios';
import { userObject, handleInput } from '../../functions/handleInputSignup.js';

// Todo: Error handling for password mismatch

function Signup() {
    let [tempPassword, setTempPassword] = useState("");
    const [error, setError] = useState('');
    const usernameEl = useRef();

    const handleSubmit = async () => {
        try {
            if (userObject.password !== tempPassword) {
            } else {
                // handling form submit
                let result = await axios.post(`${process.env.REACT_APP_SERVER}/signup`, userObject);
                localStorage.setItem('userData', JSON.stringify(result.data.user));
                localStorage.setItem('token', JSON.stringify(result.data.token));
                window.location = "/";
            }
        } catch (e) {
            setError(e.message);
            // Todo: look into better way of doing this, maybe using a react hook
            document.getElementById('username').value = '';
            document.getElementById('password').value = '';
            document.getElementById('confirmPassword').value = '';
            document.getElementById('email').value = '';
            setTempPassword('');
        }
    }

    return (
        <div id="signup">
            <h1>Signup</h1>
            {error ? (
                <h3 id="error">{error === 'Network Error' ? 'Servers are down...' : 'Request failed with status code 500' ? 'Email already in use... Please use a different email.' : error}</h3>
            ) : null}
            <div id='signupForm'>
                {/* creating the username textfield */}
                <InputLabel htmlFor="input-with-icon-adornment">
                    Username
                </InputLabel>
                <Input
                    id="username"
                    className='input'
                    ref={usernameEl}
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
                    onChange={(e) => setTempPassword(e.target.value)}
                    id="password"
                    className='input'
                    type="password"
                />
                {/* creating the confirm password textfield */}
                <InputLabel htmlFor="input-with-icon-adornment">
                    Confirm Password
                </InputLabel>
                <Input
                    id="confirmPassword"
                    type="password"
                    className='input'
                    onChange={handleInput}
                />
                {/* creating the email textfield */}
                <InputLabel htmlFor="input-with-icon-adornment">
                    Email
                </InputLabel>
                <Input
                    id="email"
                    type="email"
                    className='input'
                    onChange={handleInput}
                />
                <Button variant="outlined" onClick={handleSubmit} id='btn'>Submit</Button>
            </div>
        </div>
    );
}

export default Signup;
