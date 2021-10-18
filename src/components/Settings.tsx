import iconClose from 'assets/icon-close.svg';
import { useState } from 'react';
import styled from 'styled-components';
import media from 'styles/mediaQueries';
import appTheme, { colors, ThemeType } from 'styles/theme';
import IconButton from 'components/IconButton';
import InputNumber from 'components/InputNumber';
import Modal from 'components/Modal';
import SettingsButton from 'components/SettingsButton';

const StyledModal = styled(Modal)`
  padding: 4.6rem 2.4rem;
  display: grid;
  grid-template-rows: 1fr auto auto;

  @media (${media.md}) {
    padding: 0;
  }
`;

const Content = styled.div`
  padding-bottom: 2.7rem;
  justify-self: center;
  width: 100%;
  max-width: 54rem;
  background-color: ${({ theme }) => theme.white};
  border-radius: 1.5rem;
  grid-area: 1 / 1 / 3 / 2;

  @media (${media.md}) {
    border-radius: 2.5rem;
  }
`;

const Header = styled.div`
  padding: 2.4rem 2.4rem 2.8rem;
  display: flex;
  justify-content: space-between;
  width: 100%;
  border-bottom: 1px solid ${({ theme }) => theme.gray};

  @media (${media.md}) {
    padding: 3.4rem 4rem 3.1rem;
  }
`;

const Body = styled.div`
  padding: 2.4rem 2.4rem 3.2rem;

  hr {
    border: 0;
    border-top: 1px solid ${({ theme }) => theme.gray};
    margin-bottom: 2.4rem;
  }

  @media (${media.md}) {
    padding: 2.4rem 4rem 3.2rem;
    hr {
      margin: 2.4rem 0;
    }
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

  @media (${media.md}) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
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

  @media (${media.md}) {
    font-size: 2.8rem;
    line-height: 3.5rem;
  }
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

  @media (${media.md}) {
    margin-bottom: 0;
    font-size: 1.3rem;
    line-height: 1.6rem;
    letter-spacing: 0.5rem;
    text-align: left;
  }
`;

const Label = styled.p`
  font-weight: bold;
  font-size: 1.2rem;
  line-height: 1.5rem;
  color: ${({ theme }) => theme.grayishDark};
  opacity: 0.4;
`;

const TimeGroup = styled.div`
  display: flex;
  flex-direction: column;

  & > div {
    margin-bottom: 0.8rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }

  @media (${media.md}) {
    margin-top: 2.6rem;
    flex-direction: row;
    gap: 2rem;

    & > div {
      flex-direction: column;
      align-items: flex-start;
      gap: 1rem;
    }
  }
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
    <StyledModal>
      <Content>
        <Header>
          <Heading>Settings</Heading>
          <IconButton src={iconClose} onClick={closeModal} />
        </Header>
        <Body>
          <Heading2>Time (minutes)</Heading2>
          <TimeGroup>
            <div>
              <Label>pomodoro</Label>
              <InputNumber />
            </div>
            <div>
              <Label>short break</Label>
              <InputNumber />
            </div>
            <div>
              <Label>long break</Label>
              <InputNumber />
            </div>
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
    </StyledModal>
  );
};

export default Settings;
