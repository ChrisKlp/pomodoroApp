import Logo from 'components/Logo';
import Settings from 'components/Settings';
import SettingsButton from 'components/SettingsButton';
import Switch from 'components/Switch';
import Timer from 'components/Timer';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from 'styles/GlobalStyle';
import theme from 'styles/theme';

const App: React.FC = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Logo />
    <Switch />
    <Timer />
    <SettingsButton />
    <Settings />
  </ThemeProvider>
);

export default App;
