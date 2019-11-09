import React from 'react'

//* MUI
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
// import DialogContent from '@material-ui/core/DialogContent';
// import DialogActions from '@material-ui/core/DialogActions';
// import Hidden from '@material-ui/core/Hidden';
// import Grid from '@material-ui/core/Grid';
// import Button from '@material-ui/core/Button';
// import TextField from '@material-ui/core/TextField';

interface signInProps {
    dialogProps: {
        open: boolean
        onClose?: () => void
    }
}

export const SignInDialog: React.FC<signInProps> = ({ dialogProps }) => {
    return (
        <Dialog
            fullWidth
            maxWidth="sm"
            {...dialogProps}
        >
            <DialogTitle>Sign in to your account</DialogTitle>
        </Dialog>
    )
}

export default SignInDialog
