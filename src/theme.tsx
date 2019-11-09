import red from '@material-ui/core/colors/red';
import { createMuiTheme } from '@material-ui/core/styles';

// A custom theme for this app
const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#FF0000',
      },
      secondary: {
        main: '#FFFFFF',
      },
      error: {
        main: red.A400,
      },
      background: {
        default: '#fff',
      },
    },
  });
  
  export default theme;