import Logo from 'components/Logo';
import Settings from 'components/Settings';
import IconButton from 'components/IconButton';
import Switch from 'components/Switch';
import Timer from 'components/Timer';
import styled, { ThemeProvider } from 'styled-components';
import GlobalStyle from 'styles/GlobalStyle';
import theme from 'styles/theme';
import settingsIcon from 'assets/icon-settings.svg';

const SettingsIcon = styled(IconButton)`
  margin: 7.9rem auto 0;
`;

const App: React.FC = () => (
  <ThemeProvider theme={theme.red}>
    <GlobalStyle />
    <Logo />
    <Switch />
    <Timer />
    <SettingsIcon src={settingsIcon} />
    <Settings />
  </ThemeProvider>
);

export default App;
