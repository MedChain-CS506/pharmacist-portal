import React from 'react'

//* MUI
import { makeStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import Hidden from '@material-ui/core/Hidden';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles({
    dialogContent: {
      overflowY: 'hidden',
    }
});

interface SignUpProps {
    dialogProps: {
        open: boolean
        onClose?: () => void
    }
}

const SignUpDialog: React.FC<SignUpProps> = ({ dialogProps }) => {
    return (
        <Dialog
            fullWidth
            maxWidth="md"
            {...dialogProps}
            // onKeyPress={handleKeyPress}
            // onExited={handleExited}
        >
            <DialogTitle>Sign up for an account</DialogTitle>
        </Dialog>
    )
}

export default SignUpDialog