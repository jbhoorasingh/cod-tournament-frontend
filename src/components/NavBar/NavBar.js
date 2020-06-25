import React from 'react';
import { Link } from 'react-router-dom';
import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import HomeIcon from '@material-ui/icons/Home';
import PersonIcon from '@material-ui/icons/Person';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

//https://material-ui.com/components/app-bar/
export default function NavBar() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    return (
        <AppBar position="fixed" color="primary" style={{top: "auto", bottom: 0}}>
        <BottomNavigation
            value={value}
            onChange={(event, newValue) => {
                setValue(newValue);
            }}
            showLabels
            className={classes.root}>
            <BottomNavigationAction label="Home"  component={Link} to='/' value="/" icon={<HomeIcon/>}/>
            <BottomNavigationAction label="Recent"  component={Link} to='/recent' icon={<RestoreIcon/>}/>
            <BottomNavigationAction label="Account" icon={<PersonIcon/>}/>
        </BottomNavigation>
        </AppBar>
    );
}