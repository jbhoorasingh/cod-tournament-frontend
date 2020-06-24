import React, {useState} from "react";
import {Button, FormControl, FormGroup,  Input, InputLabel } from "@material-ui/core";
import "./Login.css";


export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function validateForm() {
        return email.length > 0 && password.length > 0;
    }

    function handleSubmit(event) {
        event.preventDefault();
        console.log("Hello")
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