import React from 'react'

//* MUI
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import GitHubIcon from '@material-ui/icons/GitHub';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import AddCircleIcon from '@material-ui/icons/AddCircle';

import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
    center: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      textAlign: 'center',
    },
  
    button: {
      marginTop: theme.spacing(1),
    },
  
    buttonIcon: {
      marginRight: theme.spacing(1),
    }
}));

interface LandingProps {
    signedIn: boolean
}

const Landing: React.FC<LandingProps> = ({ signedIn }) => {
  const classes = useStyles();

  if (signedIn) {
    return (
      <>
        {/* <Search />
        <Patients /> */}
      </>
    );
  }
  return (
    <div className={classes.center}>
      <FavoriteIcon color="action" />
      <Typography color="textSecondary" variant="h3">
        {process.env.REACT_APP_NAME}
      </Typography>
      <Typography color="textSecondary" variant="subtitle1">
        The simplest decentralized medical-records application
      </Typography>
      <Fab
        className={classes.button}
        color="secondary"
        href="https://github.com/MedChain-CS506"
        rel="noopener noreferrer"
        target="_blank"
        variant="extended"
      >
        <GitHubIcon className={classes.buttonIcon} /> Repo
      </Fab>
    </div>
  );
}

export default Landing