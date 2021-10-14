import styled from 'styled-components';

const Wrapper = styled.div`
  margin: 0 auto;
  position: relative;
  padding: 1.6rem;
  background: linear-gradient(315deg, #2e325a, #0e112a), no-repeat;
  width: 30rem;
  height: 30rem;
  border-radius: 50%;
  box-shadow: -5rem -5rem 10rem ${({ theme }) => theme.shadow},
    5rem 5rem 10rem #121530;
  z-index: 0;
`;

const Background = styled.div`
  padding: 1rem;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.dark};
  height: 100%;
  width: 100%;
`;

const Content = styled.div`
  position: relative;
  display: grid;
  justify-items: center;
  align-content: center;
  gap: 1.2rem;
  border-radius: 50%;
  height: 100%;
  width: 100%;
  z-index: 0;
`;

const ProgressBar = styled.svg`
  position: absolute;
  width: 100%;
  height: 100%;
  transform: rotate(-90deg);
  z-index: -1;

  circle {
    width: 100%;
    height: 100%;
    stroke: ${({ theme }) => theme.primary};
    fill: none;
    stroke-width: 8;
    stroke-linecap: round;
    stroke-dasharray: 754;
    stroke-dashoffset: 0;
    animation: anim 10s;
  }

  @keyframes anim {
    100% {
      stroke-dashoffset: 754;
    }
  }
`;

const Time = styled.p`
  font-weight: bold;
  font-size: 8rem;
  line-height: 9.9rem;
  text-align: center;
  letter-spacing: -0.4rem;
  color: ${({ theme }) => theme.light};
`;

const Button = styled.button`
  font-weight: bold;
  font-size: 1.4rem;
  line-height: 1.7rem;
  letter-spacing: 1.3125rem;
  color: ${({ theme }) => theme.light};
  cursor: pointer;
  transition: color 0.2s;

  :hover {
    color: ${({ theme }) => theme.primary};
  }
`;

type TimerProps = {};

const Timer: React.FC<TimerProps> = () => {
  return (
    <Wrapper>
      <Background>
        <Content>
          <ProgressBar xmlns="http://www.w3.org/2000/svg" version="1.1">
            <circle cx="124" cy="124" r="120" />
          </ProgressBar>
          <Time>17:59</Time>
          <Button>PAUSE</Button>
        </Content>
      </Background>
    </Wrapper>
  );
};

export default Timer;
