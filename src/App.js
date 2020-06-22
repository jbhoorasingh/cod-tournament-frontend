//import React from 'react';
import './App.css';

import React, {useEffect, useState} from "react";
import {createMuiTheme, makeStyles, responsiveFontSizes, ThemeProvider} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Container from '@material-ui/core/Container';
import 'fontsource-roboto';

const useStyles = makeStyles({
    table: {
        minWidth: 300,
    },
});

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

function CountDownTimer() {
    const calculateTimeLeft = () => {
        const difference = +new Date("2020-06-25T18:00:00") - +new Date();
        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60)
            };
        }

        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);
    });

    const timerComponents = [];

    Object.keys(timeLeft).forEach(interval => {
        if (!timeLeft[interval]) {
            return;
        }

        timerComponents.push(
            <div class="countdown">
                <span className="countdown-value">{timeLeft[interval]}</span>
                <span className="countdown-interval">{interval}{" "}</span>
            </div>
        );
    });

    return (
        <div>
            <Typography variant="h2">2020 Week 26 - CoD Tournament</Typography>
            <Typography variant="h3">Free-For-All - Multiple Rounds</Typography>
            <div class="countdown-container">
                {timerComponents.length ? timerComponents : <span>Game on!</span>}
            </div>
        <br/>
        </div>

    );
}

function PointTable() {
    const point_table_rows = [
        {'position': 1, 'earned_points': 10},
        {'position': 2, 'earned_points': 8},
        {'position': 3, 'earned_points': 6},
        {'position': 4, 'earned_points': 4},
        {'position': 5, 'earned_points': 2},
        {'position': 6, 'earned_points': 1},
    ]
    const classes = useStyles();
    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Postion</TableCell>
                        <TableCell align="right">Points Earned</TableCell>

                    </TableRow>
                </TableHead>
                <TableBody>
                    {point_table_rows.map((row) => (
                        <TableRow key={row.name}>
                            <TableCell component="th" scope="row">
                                {row.position}
                            </TableCell>
                            <TableCell align="right">{row.earned_points}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

function TournamentRules() {
    return (
        <div>
            <Typography variant="h4">Tournament Rules</Typography>
            <p>Player which accumulates the the highest points after the following matches will be crowned the
                winner</p>
            <ul>
                <li>3 hardcore: shipment, rust & shoothouse</li>
                <li>3 core: shipment, rust & shoothouse</li>
                <li>1 core gungame: picadilly</li>
            </ul>

            <Typography variant="h6">Points Table</Typography>
            <PointTable/>
            <br/>
        </div>
    )
}


function ParticipantTable() {
    const participant_rows = [
        {'activision_id': 'ApacheBadIndian', 'avatar_url':'https://static-cdn.jtvnw.net/jtv_user_pictures/d15acf18-4c1c-4ad7-88ff-729f2bebf6b1-profile_image-70x70.png', 'stream_url': 'https://www.twitch.tv/apachebadindian', 'stream_service': 'Twitch'},
        {'activision_id': 'ParvDawg', 'avatar_url':'https://static-cdn.jtvnw.net/user-default-pictures-uv/998f01ae-def8-11e9-b95c-784f43822e80-profile_image-50x50.png', 'stream_url': 'https://www.twitch.tv/parvdawg', 'stream_service': 'Twitch'},
        {'activision_id': 'MigzzyLive', 'avatar_url':'https://static-cdn.jtvnw.net/jtv_user_pictures/1a6805cc-32cd-42e8-8bd7-32a94d31025d-profile_image-70x70.jpeg', 'stream_url': 'https://www.twitch.tv/migzzylive', 'stream_service': 'Twitch'},

    ]
    const classes = useStyles();
    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell></TableCell>
                        <TableCell>Activision ID</TableCell>
                        <TableCell align="right">Stream</TableCell>

                    </TableRow>
                </TableHead>
                <TableBody>
                    {participant_rows.map((row) => (
                        <TableRow key={row.name}>
                            <TableCell align="right"><Avatar alt={row.activision_id}
                                                             src={row.avatar_url}/></TableCell>
                            <TableCell component="th" scope="row">{row.activision_id}</TableCell>
                            <TableCell align="right"><a href={row.stream_url}>{row.stream_service}</a></TableCell>

                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

function ParticipantList() {
    return (
        <div>
            <Typography variant="h4">Participant List</Typography>
            <ParticipantTable/>
            <br/>
        </div>
    )
}


function LeaderBoardTable() {
    const participant_rows = [
        {'activision_id': 'ApacheBadIndian', 'stream_url': 'https://www.twitch.tv/apachebadindian', 'stream_service': 'Twitch'},
        {'activision_id': 'ParvDawg', 'stream_url': 'https://www.twitch.tv/parvdawg', 'stream_service': 'Twitch'},
        {'activision_id': 'MigzzyLive', 'stream_url': 'https://www.twitch.tv/migzzylive', 'stream_service': 'Twitch'},

    ]
    const classes = useStyles();
    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Postion</TableCell>
                        <TableCell>Activision ID</TableCell>
                        <TableCell align="right">Points</TableCell>

                    </TableRow>
                </TableHead>
                <TableBody>
                    {participant_rows.map((row) => (
                        <TableRow key={row.name}>
                            <TableCell align="right">--</TableCell>
                            <TableCell component="th" scope="row">{row.activision_id}</TableCell>
                            <TableCell align="right">0</TableCell>

                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}


function LeaderBoard() {
    return (
        <div>
            <Typography variant="h4">Leaderboard</Typography>
            <LeaderBoardTable/>
        </div>
    )
}

function App() {
    return (
        <div>
            <Container maxWidth="md">
                <ThemeProvider theme={theme}>
                    <CountDownTimer/>
                    <TournamentRules/>
                    <ParticipantList/>
                    <LeaderBoard/>
                </ThemeProvider>
            </Container>
        </div>

    );
}

export default App;
