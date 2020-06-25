import React, {useState} from "react";
import {Button, FormControl, FormGroup, Input, InputLabel} from "@material-ui/core";
import "./Login.css";
import axios from 'axios';


export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoggedIn, setLoggedIn] = useState(false);
    const [isError, setIsError] = useState(false);

    function validateForm() {
        return email.length > 0 && password.length > 0;
    };
 //https://blog.logrocket.com/how-to-make-http-requests-like-a-pro-with-axios/
    //https://medium.com/better-programming/building-basic-react-authentication-e20a574d5e71
    function handleSubmit(event) {
        event.preventDefault();
        console.log(`---- Login Logic ${email} ${password}`);
        //let data = "{\"username\":\"paul@nomail.com\",\"password\":\"password\"}";
        //let data = `{"username: "${email}", "password": "${password}"}`;
        let data = `{
  "username": "${email}",
  "password": "${password}"
}`;
        console.log(data);
        axios.post('http://10.0.0.241:5000/api/v1/auth/', data)
            .then((response) => {
                console.log(response);
            }, (error) => {
                console.log(error);
            });
    }

    return (
        <div className="Login">
            <form onSubmit={handleSubmit}>
                <FormGroup controlId="email" bsSize="large">
                    <FormControl>
                        <InputLabel htmlFor="email">Email</InputLabel>
                        <Input
                            id="email"
                            autoFocus
                            type="email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />
                    </FormControl>
                </FormGroup>
                <FormGroup controlId="password" bsSize="large">
                    <FormControl>
                        <InputLabel htmlFor="password">Password</InputLabel>
                        <Input
                            id="password"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            type="password"
                        /></FormControl>
                </FormGroup>
                <Button block fullWidth='true' disabled={!validateForm()} type="submit">
                    Login
                </Button>
            </form>
        </div>
    );
}