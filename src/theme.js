import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#FFDB00',
      light: '#FFE94D',
      dark: '#E0C000',
      contrastText: '#0C0C0C',
    },
    secondary: {
      main: '#0054A8',
      contrastText: '#FFFFFF',
    },
    background: {
      default: '#FFFEFB',
      paper: '#F5F4EF',
    },
    text: {
      primary: '#0C0C0C',
      secondary: '#4A4A46',
      disabled: '#8A8A82',
    },
    info: {
      main: '#0F6AB5',
      dark: '#0054A8',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: '2.125rem',
      fontWeight: 500,
    },
  },
  spacing: 8,
});

export default theme;
