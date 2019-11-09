import React from 'react'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from 'react-router-dom';

  //* PAGES
import Landing from '../Landing';
import NotFound from '../NotFound';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    container: {
        m: 'auto',
        overflow: 'hidden',
        padding: '1rem 2rem',
    },
});

interface RoutesProps {
    signedIn: boolean
}

const Routes: React.FC<RoutesProps> = ({ signedIn }) => {
    const classes = useStyles();

    return (
        <Router>
            <div className={classes.container}>
                <Switch>
                    <Route exact path="/">
                        <Landing signedIn={signedIn} />
                    </Route>
                    <Route>
                        <NotFound />
                    </Route>
                    <Redirect to="/not-found" />
                </Switch>
            </div>
        </Router>
    )
}

export default Routes