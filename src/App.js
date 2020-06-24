//import React from 'react';
import './App.css';

import React, {} from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {createMuiTheme, responsiveFontSizes, ThemeProvider} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import 'fontsource-roboto';
import {Login, NavBar} from "./components"
import {HomePage, RecentPage} from "./pages";



let theme = createMuiTheme();
theme = responsiveFontSizes(theme);


function App() {
    return (
        <div>
            <ThemeProvider theme={theme}>
                <div style={{marginBottom: 66 + 'px'}}>
                    <Container maxWidth="md">

                        <Router>
                            <Switch>
                                <Route exact path="/">
                                    <HomePage/>
                                </Route>
                                <Route exact path="/login">
                                    <Login />
                                </Route>
                                <Route exact path="/recent">
                                    <RecentPage/>
                                </Route>
                            </Switch>
                        </Router>
                    </Container></div>
                <NavBar/>
            </ThemeProvider>
        </div>

    );
}

export default App;
