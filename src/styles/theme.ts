export const colors = {
  red: '#F87070',
  cyan: '#70F3F8',
  violet: '#D881F8',
};

const defaultTheme = {
  light: '#D7E0FF',
  lightFaded: 'rgba(215, 224, 255, 0.4)',
  white: '#FFFFFF',
  gray: '#EFF1FA',
  grayishDark: '#1E213F',
  dark: '#161932',
  shadow: '#272c5A',
};

const red = {
  primary: colors.red,
  applyButtonColor: defaultTheme.white,
  ...defaultTheme,
};

const cyan = {
  primary: colors.cyan,
  applyButtonColor: defaultTheme.dark,
  ...defaultTheme,
};

const violet = {
  primary: colors.violet,
  applyButtonColor: defaultTheme.white,
  ...defaultTheme,
};

export default { red, cyan, violet };
export type ThemeType = typeof red;
