import React from 'react';

import Hidden from '@material-ui/core/Hidden';

import SignInDialog from '../SignInDialog';

interface DialogProps {
    signedIn: boolean
    dialogs: {
      signInDialog: SignInDialog
    }
}

const DialogHost: React.FC<DialogProps> = ({ signedIn = false, dialogs }) => {
  const { signInDialog } = dialogs;

  return (
    <>
      <Hidden xsDown>
        {!signedIn && (
          <>
            <SignInDialog
              dialogProps={signInDialog.dialogProps}
            />
          </>
        )}
      </Hidden>

      <Hidden smUp>
        {!signedIn && (
          <>
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