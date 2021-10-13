import styled from 'styled-components';
import logo from 'assets/logo.svg';

const Wrapper = styled.div`
  display: grid;
  place-content: center;

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
