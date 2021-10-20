import { useAppContext } from 'context/AppContext';
import styled, { css } from 'styled-components';
import media from 'styles/mediaQueries';

const Wrapper = styled.div`
  position: relative;
  display: flex;
  margin: 4.5rem auto 4.8rem;
  padding: 0.8rem;
  max-width: 32.7rem;
  border-radius: 50rem;
  background-color: ${({ theme }) => theme.dark};
  z-index: 10;

  @media (${media.md}) {
    max-width: 37.3rem;
    margin: 5.5rem auto 4.5rem;
  }

  @media (${media.md}) and (orientation: portrait) {
    margin: 5.5rem auto 10.9rem;
  }
`;

const Button = styled.button<{ active?: boolean }>`
  width: 33.3%;
  padding: 1.8rem 0;
  font-weight: bold;
  font-size: 1.2rem;
  text-align: center;
  color: ${({ theme }) => theme.lightFaded};
  border-radius: 3em;
  cursor: pointer;
  transition: color 0.2s;

  :hover {
    color: ${({ theme }) => theme.light};
  }

  @media (${media.md}) {
    font-size: 1.4rem;
  }

  ${({ active }) =>
    active &&
    css`
      color: ${({ theme }) => theme.grayishDark};
      background-color: ${({ theme }) => theme.primary};
      pointer-events: none;
      transition: none;

      :hover {
        color: unset;
      }
    `};
`;

type SwitchProps = {
  className?: string;
};

const TimerSwitch: React.FC<SwitchProps> = () => {
  const { state, switchTimer } = useAppContext();

  return (
    <Wrapper>
      {state.timers.map(({ name, value }) => (
        <Button
          key={name}
          active={state.activeTimer.name === name}
          onClick={() => switchTimer(name, value)}
        >
          {name}
        </Button>
      ))}
    </Wrapper>
  );
};

export default TimerSwitch;
