import React, { useState } from 'react';

//* Components
import Navbar from './components/layout/Navbar';
import Loading from './components/layout/Loading';

//* Pages
import Routes from './components/pages/Routes';

const App: React.FC = () => {
  const [signedIn] = useState(false)
  const [ready, setReady] = useState(true)

  return (
    <>
      {!ready && <Loading />}
      {ready && (
        <>
          <Navbar />

          <Routes signedIn={signedIn} />

        </>
      )}
    </>
  );
}

export default App;
