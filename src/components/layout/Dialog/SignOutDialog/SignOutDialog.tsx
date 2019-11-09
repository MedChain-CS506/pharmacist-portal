import React from 'react'

//* MUI
import { makeStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
    noTitlePadding: {
      paddingTop: 3,
    },
});

interface SignOutProps {
    dialogProps: {
        open: boolean
        onClose?: () => void
    }
}

const SignOutDialog: React.FC<SignOutProps> = ({ dialogProps }) => {
    const classes = useStyles();

    return (
        <Dialog {...dialogProps}>
            <DialogTitle>Sign out?</DialogTitle>
                <DialogContent className={classes.noTitlePadding}>
                    <DialogContentText>
                        Confirm you would like to sign out.
                    </DialogContentText>
                </DialogContent>
            <DialogActions>
                <Button color="primary" onClick={dialogProps.onClose}>
                    Cancel
                </Button>
                <Button color="primary" variant="contained" onClick={() => console.log('call sign out')}>
                    Sign Out
                </Button>
            </DialogActions>
        </Dialog>
    )
}

export default SignOutDialog