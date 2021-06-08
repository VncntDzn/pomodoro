import { CssBaseline, ThemeProvider } from '@material-ui/core';
import theme from './theme/theme';
import LandingPage from 'pages/LandingPage'

const App = () => {

  return (
    <ThemeProvider theme={theme}  >
      <CssBaseline />
      <LandingPage />
    </ThemeProvider>
  );
}

export default App;
