import Logo from 'components/Logo';
import Switch from 'components/Switch';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from 'styles/GlobalStyle';
import theme from 'styles/theme';

const App: React.FC = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <div>
      <Logo />
      <Switch />
    </div>
  </ThemeProvider>
);

export default App;
