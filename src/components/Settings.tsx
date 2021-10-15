import iconClose from 'assets/icon-close.svg';
import { useState } from 'react';
import styled from 'styled-components';
import appTheme, { colors, ThemeType } from 'styles/theme';
import IconButton from './IconButton';
import InputNumber from './InputNumber';
import SettingsButton from './SettingsButton';

const Wrapper = styled.div`
  padding: 4.6rem 2.4rem;
  position: absolute;
  display: grid;
  grid-template-rows: 1fr auto auto;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  z-index: 9999;

  button {
    cursor: pointer;
  }
`;
const Overlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  background-color: #0a0c1c;
  opacity: 0.5;
  z-index: -1;
`;

const Content = styled.div`
  background-color: ${({ theme }) => theme.white};
  border-radius: 1.5rem;
  grid-area: 1 / 1 / 3 / 2;
`;

const Header = styled.div`
  padding: 2.4rem 2.4rem 2.8rem;
  display: flex;
  justify-content: space-between;
  width: 100%;
  border-bottom: 1px solid ${({ theme }) => theme.gray};
`;

const Body = styled.div`
  padding: 2.4rem 2.4rem 3.2rem;

  hr {
    border: 0;
    border-top: 1px solid ${({ theme }) => theme.gray};
    margin-bottom: 2.4rem;
  }
`;

const Group = styled.div`
  display: flex;
  flex-direction: column;

  div {
    display: flex;
    justify-content: center;
    gap: 1.6rem;
  }
`;

const Button = styled.button`
  position: relative;
  justify-self: center;
  grid-area: 2 / 1 / 4 / 2;
  padding: 1.7rem;
  background-color: ${({ theme }) => theme.primary};
  border-radius: 3em;
  width: 14rem;
  text-align: center;
  font-weight: bold;
  font-size: 1.6rem;
  line-height: 2rem;
  color: ${({ theme }) => theme.applyButtonColor};
  z-index: 0;

  ::after {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    border-radius: inherit;
    background-color: ${({ theme }) => theme.white};
    opacity: 0;
    content: '';
    transition: opacity 0.2s;
    z-index: -1;
  }

  :hover::after {
    opacity: 0.2;
  }
`;

const Heading = styled.h2`
  font-weight: bold;
  font-size: 2rem;
  line-height: 2.5rem;
  color: ${({ theme }) => theme.dark};
`;

const Heading2 = styled.p`
  margin-bottom: 1.8rem;
  font-weight: bold;
  font-size: 1.1rem;
  line-height: 1.4rem;
  text-align: center;
  letter-spacing: 0.42rem;
  text-transform: uppercase;
  color: ${({ theme }) => theme.dark};
`;

const Label = styled.p`
  font-weight: bold;
  font-size: 1.2rem;
  line-height: 1.5rem;
  color: ${({ theme }) => theme.grayishDark};
  opacity: 0.4;
`;

const TimeGroup = styled.div`
  margin-bottom: 0.8rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const settings = {
  fonts: ['Kumbh Sans', 'Roboto Slab', 'Space Mono'],
  colors: ['red', 'cyan', 'violet'],
};

type SettingsProps = {
  handleTheme: (newTheme: ThemeType) => void;
  handleFont: (font: any) => void;
  closeModal: () => void;
};

const Settings: React.FC<SettingsProps> = ({
  handleTheme,
  handleFont,
  closeModal,
}) => {
  const [fontIndex, setFontIndex] = useState(0);
  const [colorIndex, setColorIndex] = useState(0);

  const handleColorClick = (color: string, index: number) => {
    handleTheme(appTheme[color]);
    setColorIndex(index);
  };

  const handleFontClick = (font: string, index: number) => {
    handleFont(font);
    setFontIndex(index);
  };

  return (
    <Wrapper>
      <Overlay />
      <Content>
        <Header>
          <Heading>Settings</Heading>
          <IconButton src={iconClose} onClick={closeModal} />
        </Header>
        <Body>
          <Heading2>Time (minutes)</Heading2>
          <TimeGroup>
            <Label>pomodoro</Label>
            <InputNumber />
          </TimeGroup>
          <TimeGroup>
            <Label>short break</Label>
            <InputNumber />
          </TimeGroup>
          <TimeGroup>
            <Label>long break</Label>
            <InputNumber />
          </TimeGroup>
          <hr />
          <Group>
            <Heading2>Font</Heading2>
            <div>
              {settings.fonts.map((font, index) => (
                <SettingsButton
                  key={font}
                  font={font}
                  active={settings.fonts[fontIndex] === font}
                  aria-label={`Font ${font}`}
                  onClick={() => handleFontClick(font, index)}
                >
                  Aa
                </SettingsButton>
              ))}
            </div>
          </Group>
          <hr />
          <Group>
            <Heading2>Color</Heading2>
            <div>
              {settings.colors.map((color, index) => (
                <SettingsButton
                  key={color}
                  color={colors[color]}
                  checked={settings.colors[colorIndex] === color}
                  aria-label={`Color ${color}`}
                  onClick={() => handleColorClick(color, index)}
                />
              ))}
            </div>
          </Group>
        </Body>
      </Content>
      <Button onClick={closeModal}>Apply</Button>
    </Wrapper>
  );
};

export default Settings;
