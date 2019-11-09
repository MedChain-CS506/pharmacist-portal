import React from 'react';

import Hidden from '@material-ui/core/Hidden';

import SignInDialog from '../SignInDialog';
import SignUpDialog from '../SignUpDialog';
import SignOutDialog from '../SignOutDialog';

interface DialogProps {
    signedIn: boolean
    dialogs: {
      signInDialog: SignInDialog
      signUpDialog: SignUpDialog
      signOutDialog: SignOutDialog
    }
}

const DialogHost: React.FC<DialogProps> = ({ signedIn = false, dialogs }) => {
  const { signInDialog } = dialogs;
  const { signUpDialog } = dialogs;
  const { signOutDialog } = dialogs;

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

      {signedIn && (
        <>
          <SignOutDialog dialogProps={signOutDialog.dialogProps} />
        </>
      )}
    </>
  );
};

export default DialogHost;