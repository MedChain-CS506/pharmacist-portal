import React, { useState } from 'react'

//* MUI
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Avatar from '@material-ui/core/Avatar';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

const useStyles = makeStyles({
    root: {
      background: 'linear-gradient(45deg, #0575E6 30%, #021B79 90%)',
    }
});

interface NavbarProps {
    signedIn: boolean;
    onSignInClick?: () => void
    onSignUpClick?: () => void
    onSignOutClick?: () => void
}

const Navbar: React.FC<NavbarProps> = ({ signedIn, onSignInClick, onSignUpClick, onSignOutClick }) => {
    const classes = useStyles();

    const [anchorEl, setAnchorEl] = useState(null)

    const handleSignOutClick = () => {
        setAnchorEl(null);
        //onSignOutClick();
    };

    return (
        <AppBar className={classes.root} position="static">
            <Toolbar variant="regular">
                <Box flexGrow={1}>
                    <Typography color="inherit" variant="h4">
                        {process.env.REACT_APP_NAME}
                    </Typography>
                </Box>

                {signedIn && (
                    <>
                        <IconButton
                            color="inherit"
                            //disabled={performingAction}
                            //onClick={event => setAnchorEl(event.currentTarget)}
                            onClick={onSignOutClick}
                        >
                            <Avatar alt="Avatar"></Avatar>
                        </IconButton>

                        <Menu 
                            anchorEl={anchorEl}
                            open={Boolean(anchorEl)}
                            onClose={() => setAnchorEl(null)}
                        >
                            <MenuItem onClick={handleSignOutClick}>
                                Sign out
                            </MenuItem>
                        </Menu>
                    </>
                )}

                {!signedIn && (
                    <>
                        <Box mr={1}>
                            <Button
                                color="secondary"
                                //disabled={performingAction}
                                variant="contained"
                                onClick={onSignUpClick}
                            >
                                Sign Up
                            </Button>
                        </Box>
                            <Button
                                color="secondary"
                                //disabled={performingAction}
                                variant="contained"
                                onClick={onSignInClick}
                            >
                            Sign In
                        </Button>
                    </>
                )}
            </Toolbar>
        </AppBar>
    )
}

export default Navbar