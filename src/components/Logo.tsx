import styled from 'styled-components';
import logo from 'assets/logo.svg';

const Wrapper = styled.div`
  margin-top: 3.2rem;
  position: relative;
  display: grid;
  place-content: center;
  z-index: 100;

  img {
    width: 11.7rem;
    height: 2.4rem;
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
