import React from 'react'

//* MUI
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
    root: {
      background: 'linear-gradient(45deg, #F00000 30%, #DC281E 90%)',
    }
});

interface NavbarProps {
    signedIn: boolean;
    onSignInClick?: () => void
}

const Navbar: React.FC<NavbarProps> = ({ signedIn, onSignInClick }) => {
    const classes = useStyles();

    return (
        <AppBar className={classes.root} position="static">
            <Toolbar variant="regular">
                <Box flexGrow={1}>
                    <Typography color="inherit" variant="h4">
                        {process.env.REACT_APP_NAME}
                    </Typography>
                </Box>

                {!signedIn && (
                    <>
                        <Box mr={1}>
                            <Button
                                color="secondary"
                                //disabled={performingAction}
                                variant="contained"
                                //onClick={onSignUpClick}
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