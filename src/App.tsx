import React, { useState } from 'react';

//* Components
import Navbar from './components/layout/Navbar';
import Loading from './components/layout/Loading';
import DialogHost from './components/layout/Dialog/DialogHost';

//* Pages
import Routes from './components/pages/Routes';

const App: React.FC = () => {
  const [signedIn] = useState(true)
  const [ready, setReady] = useState(true)
  const [dialog, setDialog] = useState({
    signUpDialog: false,
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
            onSignInClick={() => setDialog({ ...dialog, signInDialog: true })}
          />

          <Routes signedIn={signedIn} />

          <DialogHost 
            signedIn={signedIn}
            dialogs={{
              signUpDialog: {
                dialogProps: {
                  open: dialog.signUpDialog,
                  onClose: () => setDialog({ ...dialog, signUpDialog: false }),
                }
              },

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
