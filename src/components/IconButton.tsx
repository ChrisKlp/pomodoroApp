import styled from 'styled-components';
import SVG from 'react-inlinesvg';

const Wrapper = styled.button`
  cursor: pointer;
  display: block;
  margin: 7.9rem auto 0;
`;

const Icon = styled(SVG)`
  path {
    transition: opacity 0.2s;
  }

  :hover path {
    opacity: 1;
  }
`;

type IconProps = {
  onClick?: () => void;
  src: string;
};

const IconButton: React.FC<IconProps> = ({ onClick, src }) => {
  return (
    <Wrapper onClick={onClick} aria-label="Settings">
      <Icon src={src} />
    </Wrapper>
  );
};

export default IconButton;
