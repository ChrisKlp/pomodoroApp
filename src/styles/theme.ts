const colors = {
  red: '#F87070',
  cyan: '#70F3F8',
  violet: '#D881F8',
};

const theme = {
  primary: colors.red,
  light: '#D7E0FF',
  lightFaded: 'rgba(215, 224, 255, 0.4)',
  white: '#FFFFFF',
  gray: '#EFF1FA',
  grayishDark: '#1E213F',
  dark: '#161932',
  shadow: '#272c5A',
};

export default theme;
export type ThemeType = typeof theme;
