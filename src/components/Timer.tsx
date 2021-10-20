import useTimer from 'hooks/useTimer';
import styled from 'styled-components';
import media from 'styles/mediaQueries';

const STROKE_DASH_ARRAY = 754;

const Wrapper = styled.main`
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

  @media (${media.md}) {
    padding: 2.2rem;
    width: 41rem;
    height: 41rem;
  }
`;

const Background = styled.div`
  padding: 1rem;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.dark};
  height: 100%;
  width: 100%;

  @media (${media.md}) {
    padding: 1.35rem;
  }
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

const ProgressBar = styled.svg<{ progress: number }>`
  position: absolute;
  width: 100%;
  height: 100%;
  transform: rotate(-90deg);
  z-index: -1;

  circle {
    stroke: ${({ theme }) => theme.primary};
    fill: none;
    stroke-width: 8;
    stroke-linecap: round;
    stroke-dasharray: ${STROKE_DASH_ARRAY};
    stroke-dashoffset: ${({ progress }) => progress};
    transition: stroke-dashoffset 0.2s;
  }
`;

const Time = styled.p`
  font-weight: bold;
  font-size: 8rem;
  line-height: 9.9rem;
  text-align: center;
  letter-spacing: -0.4rem;
  color: ${({ theme }) => theme.light};

  @media (${media.md}) {
    font-size: 10rem;
    line-height: 12.4rem;
    letter-spacing: -0.5rem;
  }
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

  @media (${media.md}) {
    font-size: 1.6rem;
    line-height: 2rem;
    letter-spacing: 1.5rem;
  }
`;

type TimerProps = {
  timeValue: number;
};

const Timer: React.FC<TimerProps> = ({ timeValue }) => {
  const {
    time,
    totalTime,
    handleControllerClick,
    controllerLabel,
    formattedTime,
  } = useTimer(timeValue);

  const handleProgress = (STROKE_DASH_ARRAY / totalTime) * (totalTime - time);

  return (
    <Wrapper>
      <Background>
        <Content>
          <ProgressBar
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            viewBox="0, 0, 248, 248"
            progress={handleProgress}
          >
            <circle cx="124" cy="124" r="120" />
          </ProgressBar>
          <Time>{formattedTime}</Time>
          <Button onClick={handleControllerClick}>{controllerLabel}</Button>
        </Content>
      </Background>
    </Wrapper>
  );
};

export default Timer;
