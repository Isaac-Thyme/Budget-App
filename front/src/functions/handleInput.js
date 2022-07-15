// Function for Signup.jsx handle input

let userObject = {
    username: "",
    password: "",
    email: ""
}

const handleInput = (e) => {
    switch (e.target.id) {
        case "username":
            userObject = {
                username: e.target.value,
                password: userObject.password,
                email: userObject.email
            }
            break;
        case "email":
            userObject = {
                username: userObject.username,
                password: userObject.password,
                email: e.target.value
            }
            break;
        case "confirmPassword":
            userObject = {
                username: userObject.username,
                password: e.target.value,
                email: userObject.email
            }
            break;
        default:
            console.log("Something went wrong");
    }
}

export { handleInput, userObject };
