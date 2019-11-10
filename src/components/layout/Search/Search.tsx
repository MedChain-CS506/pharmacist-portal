import React, { useState, useContext } from 'react';

//* MUI
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Button from '@material-ui/core/Button';

//* Context
//import PatientContext from '../../../context/patient/PatientContext'

const useStyles = makeStyles({
  input: {
    marginLeft: 5,
  },

  button: {
    backgroundColor: 'red',
    color: 'white',
  },

  paperButton: {
    marginTop: '10px',
    marginBottom: '30px',
  },
});

const Search = () => {
  const classes = useStyles();

  //const patientContext = useContext(PatientContext)

  const [text, setText] = useState('')

//   const onSubmit = e => {
//     e.preventDefault()
//     if (text === '') {
//       return console.log('Please enter something') //TODO: Should be visible to user
//     } else {
//       //patientContext.searchPatients(text)
//       setText('')
//     }
//   } 

  return (
    <>
      <form onSubmit={() => console.log('onSubmit')}>
        <Paper>
          <InputBase
            type='text'
            name='text'
            className={classes.input}
            fullWidth
            placeholder="Search by Aadhar..."
            inputProps={{ 'aria-label': 'search patients' }}
            value={text}
            //onChange={e => setText(e.target.value)}
          />
        </Paper>
      </form>
    </>
  );
};

export default Search;