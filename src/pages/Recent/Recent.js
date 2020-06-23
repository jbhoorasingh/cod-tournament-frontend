import React from "react";
import {makeStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import 'fontsource-roboto';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Avatar from "@material-ui/core/Avatar";

const useStyles = makeStyles((theme) => ({
    avatarroot: {
        display: 'flex',
        '& > *': {
            margin: theme.spacing(1),
        },
    },
}));


// const useStyles = makeStyles({
//   root: {
//     minWidth: 275,
//   },
//   bullet: {
//     display: 'inline-block',
//     margin: '0 2px',
//     transform: 'scale(0.8)',
//   },
//   title: {
//     fontSize: 14,
//   },
//   pos: {
//     marginBottom: 12,
//   },
// });

function TournamentCard(props) {
    const classes = useStyles();
    return (
        <Card className={classes.root}>
            <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                    {props.props.type}
                </Typography>
                <Typography variant="h5" component="h2">
                    {props.props.name}
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                    Participants
                </Typography>

                <div className={classes.avatarroot}>
                    {props.props.participants.map(participant => (
                        <Avatar alt={participant.activision_id}
                                src={participant.avatar_url}/>
                    ))}
                </div>
            </CardContent>
            <CardActions>
                <div>
                    <Button size="small">More Details</Button>
                </div>

            </CardActions>
        </Card>
    );
}


function TournamentCardList(props) {

    console.log(props)
    return (
        props.props.map(tournament => (
        <TournamentCard props={tournament}/>
    )))
}

export default function RecentPage() {
    const tournaments = [{
        name: "2020 Week 26 - CoD Tournament",
        type: "Free-For-All - Multiple Rounds",
        participants: [
            {
                'activision_id': 'ApacheBadIndian',
                'avatar_url': 'https://static-cdn.jtvnw.net/jtv_user_pictures/d15acf18-4c1c-4ad7-88ff-729f2bebf6b1-profile_image-70x70.png',
                'stream_url': 'https://www.twitch.tv/apachebadindian',
                'stream_service': 'Twitch'
            },
            {
                'activision_id': 'ParvDawg',
                'avatar_url': 'https://static-cdn.jtvnw.net/user-default-pictures-uv/998f01ae-def8-11e9-b95c-784f43822e80-profile_image-50x50.png',
                'stream_url': 'https://www.twitch.tv/parvdawg',
                'stream_service': 'Twitch'
            },

        ]
    },
        {
            name: "2020 Week 27 - CoD Tournament",
            type: "Free-For-All - Multiple Rounds",
            participants: [
                {
                    'activision_id': 'ApacheBadIndian',
                    'avatar_url': 'https://static-cdn.jtvnw.net/jtv_user_pictures/d15acf18-4c1c-4ad7-88ff-729f2bebf6b1-profile_image-70x70.png',
                    'stream_url': 'https://www.twitch.tv/apachebadindian',
                    'stream_service': 'Twitch'
                },
                {
                    'activision_id': 'ParvDawg',
                    'avatar_url': 'https://static-cdn.jtvnw.net/user-default-pictures-uv/998f01ae-def8-11e9-b95c-784f43822e80-profile_image-50x50.png',
                    'stream_url': 'https://www.twitch.tv/parvdawg',
                    'stream_service': 'Twitch'
                },
                {
                    'activision_id': 'MigzzyLive',
                    'avatar_url': 'https://static-cdn.jtvnw.net/jtv_user_pictures/1a6805cc-32cd-42e8-8bd7-32a94d31025d-profile_image-70x70.jpeg',
                    'stream_url': 'https://www.twitch.tv/migzzylive',
                    'stream_service': 'Twitch'
                },

            ]
        },

    ]


    const tournament = {
        name: "2020 Week 26 - CoD Tournament",
        type: "Free-For-All - Multiple Rounds",
        participants: [
            {
                'activision_id': 'ApacheBadIndian',
                'avatar_url': 'https://static-cdn.jtvnw.net/jtv_user_pictures/d15acf18-4c1c-4ad7-88ff-729f2bebf6b1-profile_image-70x70.png',
                'stream_url': 'https://www.twitch.tv/apachebadindian',
                'stream_service': 'Twitch'
            },
            {
                'activision_id': 'ParvDawg',
                'avatar_url': 'https://static-cdn.jtvnw.net/user-default-pictures-uv/998f01ae-def8-11e9-b95c-784f43822e80-profile_image-50x50.png',
                'stream_url': 'https://www.twitch.tv/parvdawg',
                'stream_service': 'Twitch'
            },
            {
                'activision_id': 'MigzzyLive',
                'avatar_url': 'https://static-cdn.jtvnw.net/jtv_user_pictures/1a6805cc-32cd-42e8-8bd7-32a94d31025d-profile_image-70x70.jpeg',
                'stream_url': 'https://www.twitch.tv/migzzylive',
                'stream_service': 'Twitch'
            },

        ]
    }

    return (
        <div>
            <TournamentCardList props={tournaments}/>

        </div>
    );
}