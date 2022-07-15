import { Box, InputLabel, Input, InputAdornment, Button } from "@mui/material";
import { AccountCircle } from "@mui/icons-material";
import { useState } from "react";
import axios from 'axios';
import { userObject, handleInput } from '../../functions/handleInput.js';

function Signup() {
    let [tempPassword, setTempPassword] = useState("");

    const handleSubmit = async () => {
        if (userObject.password !== tempPassword) {
            console.log("password fields do not match");
        } else {
            // handling form submit
            let result = await axios.post(`${process.env.REACT_APP_SERVER}/signup`, userObject);
            console.log(result);
        }
    }

    return (
        <div id="signup">
            <h1>Welcome to the signup page</h1>
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
                    onChange={(e) => setTempPassword(e.target.value)}
                    id="password"
                    type="password"
                />
                {/* creating the confirm password textfield */}
                <InputLabel htmlFor="input-with-icon-adornment">
                    Confirm Password
                </InputLabel>
                <Input
                    id="confirmPassword"
                    type="password"
                    onChange={handleInput}
                />
                {/* creating the email textfield */}
                <InputLabel htmlFor="input-with-icon-adornment">
                    Email
                </InputLabel>
                <Input
                    id="email"
                    type="email"
                    onChange={handleInput}
                />
            </Box>
            <Button variant="outlined" onClick={handleSubmit}>Submit</Button>
        </div>
    );
}

export default Signup;
