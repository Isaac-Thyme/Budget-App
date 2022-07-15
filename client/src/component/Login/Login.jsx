import { Box, TextField, InputLabel, Input, InputAdornment, Button } from "@mui/material";
import { AccountCircle } from "@mui/icons-material";
import { useState } from "react";

function Login() {
    let [userObject, setUserObject] = useState({
        username: "",
        password: ""
    });

    const handleInput = (e) => {
        switch (e.target.id) {
            case "username":
                setUserObject({
                    username: e.target.value,
                    password: userObject.password
                });
                console.log(userObject.username);
                break;
            case "password":
                setUserObject({
                    username: userObject.username,
                    password: e.target.value
                });
                console.log("password verified");
                // negative feedback validation
                break;
            default:
                console.log("Something went wrong");
        }
    }

    return (
        <div id="login">
            <h1>Welcome to the login page</h1>
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
                <Button variant="outlined" onSubmit={handleInput} >Submit</Button>
            </Box>
        </div>
    );
}

export default Login;