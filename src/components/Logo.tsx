import styled from 'styled-components';
import logo from 'assets/logo.svg';
import media from 'styles/mediaQueries';

const Wrapper = styled.header`
  padding-top: 3.2rem;
  position: relative;
  display: grid;
  place-content: center;
  z-index: 100;

  h1 {
    opacity: 0;
    display: none;
    text-align: center;
  }

  img {
    width: 11.7rem;
    height: 2.4rem;
  }

  @media (${media.md}) {
    padding-top: 4.8rem;

    img {
      width: 15.6rem;
      height: 3.2rem;
    }
  }

  @media (${media.md}) and (orientation: portrait) {
    padding-top: 8rem;
  }
`;

type LogoProps = {
  className?: string;
};

const Logo: React.FC<LogoProps> = ({ className }) => {
  return (
    <Wrapper className={className}>
      <h1>pomodoro</h1>
      <img src={logo} alt="Logo" />
    </Wrapper>
  );
};

export default Logo;
