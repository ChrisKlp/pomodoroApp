import styled from 'styled-components';
import logo from 'assets/logo.svg';
import media from 'styles/mediaQueries';

const Wrapper = styled.div`
  padding-top: 3.2rem;
  position: relative;
  display: grid;
  place-content: center;
  z-index: 100;

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
      <img src={logo} alt="Logo" />
    </Wrapper>
  );
};

export default Logo;
