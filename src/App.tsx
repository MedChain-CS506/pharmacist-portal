import React, { useState } from 'react';

//* Components
import Navbar from './components/layout/Navbar';
import Loading from './components/layout/Loading';
import DialogHost from './components/layout/Dialog/DialogHost';

const App: React.FC = () => {
  const [signedIn] = useState(false)
  const [ready, setReady] = useState(true)
  const [dialog, setDialog] = useState({
    // signUpDialog: false,
    signInDialog: false,
    // signOutDialog: false
  });

  return (
    <>
      {!ready && <Loading />}
      {ready && (
        <>
          <Navbar 
            signedIn={signedIn} 
            onSignInClick={() => setDialog({...dialog, signInDialog: true })}
          />
          <DialogHost 
            signedIn={signedIn}
            dialogs={{
              signInDialog: {
                dialogProps: {
                  open: dialog.signInDialog,
                  onClose: () => setDialog({ ...dialog, signInDialog: false })
                }
              }
            }}
          />
        </>
      )}
    </>
  );
}

export default App;
