import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import React from 'react';
import Routes from './routes/Routes';

const theme = createTheme({
  typography: ['Sinkin', 'JustSimple', 'WildFont', 'Bellaboo'].join(','),
  palette: {
    primary: {
      main: '#EDE6E3',
    },
    secondary: {
      main: '#FF3E3E',
    },
    background: {
      default: '#fee46a',
    },
  },
});

class App extends React.Component {
  render() {
    return (
      <ThemeProvider theme={ theme }>
        <CssBaseline />
        <Routes />
      </ThemeProvider>
    );
  }
}

export default App;
