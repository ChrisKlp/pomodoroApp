import Logo from 'components/Logo';
import Settings from 'components/Settings';
import SettingsButton from 'components/SettingsButton';
import Timer from 'components/Timer';
import TimerSwitch from 'components/TimerSwitch';
import { useAppContext } from 'context/AppContext';
import { TSettings } from 'hooks/useSettings';
import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from 'styles/GlobalStyle';
import appTheme from 'styles/theme';

const App: React.FC = () => {
  const {
    state: { activeTimer },
  } = useAppContext();
  const [theme, setTheme] = useState(appTheme.red);
  const [isOpen, setIsOpen] = useState(false);

  const handleTheme = (settings: TSettings) =>
    setTheme({
      ...appTheme[settings.activeColor],
      fontFamily: settings.activeFont,
    });

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Logo />
      <TimerSwitch />
      <Timer
        timeValue={activeTimer.value}
        key={activeTimer.value || activeTimer.name}
      />
      <footer>
        <SettingsButton onClick={() => setIsOpen(true)} />
      </footer>
      {isOpen && (
        <Settings
          handleTheme={handleTheme}
          closeModal={() => setIsOpen(false)}
        />
      )}
    </ThemeProvider>
  );
};

export default App;
