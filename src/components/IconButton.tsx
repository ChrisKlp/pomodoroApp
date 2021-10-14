import styled from 'styled-components';
import SVG from 'react-inlinesvg';

const Icon = styled(SVG)`
  path {
    transition: opacity 0.2s, stroke-opacity 0.2s;
  }
`;

const Wrapper = styled.button`
  cursor: pointer;
  display: block;

  :hover ${Icon} path {
    opacity: 1;
    stroke-opacity: 1;
  }
`;

type IconProps = {
  className?: string;
  onClick?: () => void;
  src: string;
};

const IconButton: React.FC<IconProps> = ({ className, onClick, src }) => {
  return (
    <Wrapper onClick={onClick} aria-label="Settings" className={className}>
      <Icon src={src} />
    </Wrapper>
  );
};

export default IconButton;
