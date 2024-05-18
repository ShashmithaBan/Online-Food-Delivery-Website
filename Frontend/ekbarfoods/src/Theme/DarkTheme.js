import { createTheme } from '@mui/material';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#40c165',
    },
    secondary: {
      main: '#ffcb22',
    },
    black: {
      main: '#2A2B2E',
    },
    background: {
      main: '#f0efef',
      default: '#f0efef',
      paper: '#f0efef',
    },
    textColor: {
      main: '#000000',
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          color: '#000000', // Ensure body text is black
        },
      },
    },
  },
});

export default darkTheme;
