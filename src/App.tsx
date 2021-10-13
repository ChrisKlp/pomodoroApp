import { ThemeProvider } from 'styled-components';
import GlobalStyle from 'styles/GlobalStyle';
import theme from 'styles/theme';

const App: React.FC = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <div>
      <p>Hello</p>
    </div>
  </ThemeProvider>
);

export default App;
