import React, { useState, useContext } from 'react' //@ts-disable

// //* MUI
// import { makeStyles } from '@material-ui/core/styles';
// import Paper from '@material-ui/core/Paper';
// import InputBase from '@material-ui/core/InputBase';
// import Button from '@material-ui/core/Button';

// const useStyles = makeStyles({
//     input: {
//       marginLeft: 5,
//     },
  
//     button: {
//       backgroundColor: 'red',
//       color: 'white',
//     },
  
//     paperButton: {
//       marginTop: '10px',
//       marginBottom: '30px',
//     },
// });

// const Search: React.FC = () => {
//     const classes = useStyles();

//     const [text, setText] = useState('')

//     const onSubmit = e => {
//         e.preventDefault()
//         if (text === '') {
//           console.log('Please enter something')
//         } else {
//           // patientContext.searchPatients(text)
//           setText('')
//         }
//     }

//     return (
//         <>
//             <form onSubmit={onSubmit}>
//                 <Paper>
//                     <InputBase
//                         type='text'
//                         name='text'
//                         className={classes.input}
//                         fullWidth
//                         placeholder="Search Patients..."
//                         inputProps={{ 'aria-label': 'search patients' }}
//                         value={text}
//                         onChange={e => setText(e.target.value)}
//                     />
//                 </Paper>
//                 <Paper className={classes.paperButton}>
//                     <Button 
//                         className={classes.button} 
//                         fullWidth 
//                         type='submit'
//                     >
//                         Search
//                     </Button>
//                 </Paper>
//             </form>
//         </>
//     )
// }

// export default Search
