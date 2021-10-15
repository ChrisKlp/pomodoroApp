import Logo from 'components/Logo';
import Settings from 'components/Settings';
import IconButton from 'components/IconButton';
import Switch from 'components/Switch';
import Timer from 'components/Timer';
import styled, { ThemeProvider } from 'styled-components';
import GlobalStyle from 'styles/GlobalStyle';
import appTheme, { ThemeType } from 'styles/theme';
import settingsIcon from 'assets/icon-settings.svg';
import { useState } from 'react';
import media from 'styles/mediaQueries';

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
  const [fontFamily, setFontFamily] = useState('Kumbh Sans');
  const [isOpen, setIsOpen] = useState(false);

  const handleTheme = (newTheme: ThemeType) =>
    setTheme({ ...newTheme, fontFamily });

  const handleFont = (font: string) => {
    setFontFamily(font);
    setTheme({ ...theme, fontFamily: font });
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Logo />
      <Switch />
      <Timer />
      <SettingsIcon src={settingsIcon} onClick={() => setIsOpen(true)} />
      {isOpen && (
        <Settings
          handleTheme={handleTheme}
          handleFont={handleFont}
          closeModal={() => setIsOpen(false)}
        />
      )}
    </ThemeProvider>
  );
};

export default App;
