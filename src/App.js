import { ThemeProvider } from '@mui/material';
import React from 'react';
import Routes from './routes/Routes';

class App extends React.Component {
  render() {
    return (
      <ThemeProvider>
        <Routes />
      </ThemeProvider>
    );
  }
}

export default App;
