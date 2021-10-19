import settingsIcon from 'assets/icon-settings.svg';
import IconButton from 'components/IconButton';
import Logo from 'components/Logo';
import Settings from 'components/Settings';
import Switch from 'components/Switch';
import Timer from 'components/Timer';
import { AppContextProvider } from 'context/AppContext';
import { TSettings } from 'hooks/useSettings';
import { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import GlobalStyle from 'styles/GlobalStyle';
import media from 'styles/mediaQueries';
import appTheme from 'styles/theme';

const SettingsIcon = styled(IconButton)`
  margin: 7.9rem auto 4.8rem;

  @media (${media.md}) {
    margin: 6.3rem auto 5.6rem;
  }

  @media (${media.md}) and (orientation: portrait) {
    margin: 14.4rem auto 8rem;
  }
`;

const App: React.FC = () => {
  const [theme, setTheme] = useState(appTheme.red);
  const [isOpen, setIsOpen] = useState(false);

  const handleTheme = (settings: TSettings) =>
    setTheme({
      ...appTheme[settings.activeColor],
      fontFamily: settings.activeFont,
    });

  return (
    <ThemeProvider theme={theme}>
      <AppContextProvider>
        <GlobalStyle />
        <Logo />
        <Switch />
        <Timer />
        <SettingsIcon src={settingsIcon} onClick={() => setIsOpen(true)} />
        {isOpen && (
          <Settings
            handleTheme={handleTheme}
            closeModal={() => setIsOpen(false)}
          />
        )}
      </AppContextProvider>
    </ThemeProvider>
  );
};

export default App;
