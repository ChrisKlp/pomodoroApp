import { useState } from 'react';
import styled, { css } from 'styled-components';

const Wrapper = styled.div`
  padding: 0.8rem;
  border-radius: 50rem;
  background-color: ${({ theme }) => theme.dark};
`;

const Button = styled.button<{ active?: boolean }>`
  width: 33.3%;
  padding: 1.8rem;
  font-weight: bold;
  font-weight: 1.2rem;
  text-align: center;
  color: ${({ theme }) => theme.lightFaded};
  border-radius: 3em;
  cursor: pointer;

  ${({ active }) =>
    active &&
    css`
      color: ${({ theme }) => theme.grayishDark};
      background-color: ${({ theme }) => theme.primary};
    `};
`;

const buttons = [
  {
    name: 'pomodoro',
  },
  {
    name: 'short break',
  },
  {
    name: 'long break',
  },
];

type SwitchProps = {};

const Switch: React.FC<SwitchProps> = () => {
  const [buttonIndex, setButtonIndex] = useState(0);

  return (
    <Wrapper>
      {buttons.map(({ name }, index) => (
        <Button
          key={name}
          active={buttons[buttonIndex].name === name}
          onClick={() => setButtonIndex(index)}
        >
          {name}
        </Button>
      ))}
    </Wrapper>
  );
};

export default Switch;
