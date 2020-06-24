import React, {useState} from "react";
import {Button, FormControl, FormGroup, FormLabel, Input, InputLabel } from "@material-ui/core";
import "./Login.css";

// export default function Login() {
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//
//     function validateForm() {
//         return email.length > 0 && password.length > 0;
//     }
//
//     function handleSubmit(event) {
//         event.preventDefault();
//     }
//
//     return (
//         <div className="Login">
//             <form onSubmit={handleSubmit}>
//                 <FormGroup controlId="email" bsSize="large">
//                     {/*<ControlLabel>Email</ControlLabel>*/}
//                     <FormLabel>Email</FormLabel>
//                     <FormControl
//                         autoFocus
//                         type="email"
//                         value={email}
//                         onChange={e => setEmail(e.target.value)}
//                     />
//                 </FormGroup>
//                 <FormGroup controlId="password" bsSize="large">
//                     {/*<ControlLabel>Password</ControlLabel>*/}
//                     <FormLabel>Password</FormLabel>
//                     <FormControl
//                         value={password}
//                         onChange={e => setPassword(e.target.value)}
//                         type="password"
//                     />
//                 </FormGroup>
//                 <Button block bsSize="large" disabled={!validateForm()} type="submit">
//                     Login
//                 </Button>
//             </form>
//         </div>
//     );
// }

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function validateForm() {
        return email.length > 0 && password.length > 0;
    }

    function handleSubmit(event) {
        event.preventDefault();
    }

    return (
        <div className="Login">
            <form onSubmit={handleSubmit}>
                <FormGroup controlId="email" bsSize="large">
                    {/*<ControlLabel>Email</ControlLabel>*/}


                    <FormControl>
                        <InputLabel htmlFor="email">Email</InputLabel>
                        <Input
                            id="password"
                            autoFocus
                            type="email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />
                    </FormControl>
                </FormGroup>
                <FormGroup controlId="password" bsSize="large">
                    {/*<ControlLabel>Password</ControlLabel>*/}
                    <FormControl>
                        <InputLabel htmlFor="password">Password</InputLabel>
                        <Input
                            id="password"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            type="password"
                        /></FormControl>
                </FormGroup>
                <Button block bsSize="large" disabled={!validateForm()} type="submit">
                    Login
                </Button>
            </form>
        </div>
    );
}