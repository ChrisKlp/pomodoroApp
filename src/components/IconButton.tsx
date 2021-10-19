import styled, { css } from 'styled-components';
import SVG from 'react-inlinesvg';

const Icon = styled(SVG)`
  path {
    transition: opacity 0.2s, stroke-opacity 0.2s;
  }
`;

const Wrapper = styled.button<{ disabled?: boolean }>`
  cursor: pointer;
  display: block;

  :hover ${Icon} path {
    opacity: 1;
    stroke-opacity: 1;
  }

  ${({ disabled }) =>
    disabled &&
    css`
      pointer-events: none;
    `};
`;

type IconProps = {
  className?: string;
  onClick?: () => void;
  src: string;
  disabled?: boolean;
};

const IconButton: React.FC<IconProps> = ({
  className,
  onClick,
  src,
  disabled,
}) => {
  return (
    <Wrapper
      onClick={onClick}
      aria-label="Settings"
      className={className}
      disabled={disabled}
    >
      <Icon src={src} />
    </Wrapper>
  );
};

export default IconButton;
