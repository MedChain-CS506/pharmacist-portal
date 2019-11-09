import React from 'react';

import Hidden from '@material-ui/core/Hidden';

import SignInDialog from '../SignInDialog';
import SignUpDialog from '../SignUpDialog';

interface DialogProps {
    signedIn: boolean
    dialogs: {
      signInDialog: SignInDialog
      signUpDialog: SignUpDialog
    }
}

const DialogHost: React.FC<DialogProps> = ({ signedIn = false, dialogs }) => {
  const { signInDialog } = dialogs;
  const { signUpDialog } = dialogs;

  return (
    <>
      <Hidden xsDown>
        {!signedIn && (
          <>
            <SignUpDialog
              dialogProps={signUpDialog.dialogProps}
            />
            <SignInDialog
              dialogProps={signInDialog.dialogProps}
            />
          </>
        )}
      </Hidden>

      <Hidden smUp>
        {!signedIn && (
          <>
            <SignUpDialog
              dialogProps={{
                //fullScreen: true,
                ...signUpDialog.dialogProps,
              }}
            />
            <SignInDialog
              dialogProps={{
                //fullScreen: true,
                ...signInDialog.dialogProps,
              }}
            />
          </>
        )}
      </Hidden>
    </>
  );
};

export default DialogHost;