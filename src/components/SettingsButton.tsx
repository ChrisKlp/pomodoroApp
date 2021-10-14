import styled from 'styled-components';
import SVG from 'react-inlinesvg';
import settingsIcon from 'assets/icon-settings.svg';

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
};

const SettingsButton: React.FC<IconProps> = ({ onClick }) => {
  return (
    <Wrapper onClick={onClick} aria-label="Settings">
      <Icon src={settingsIcon} />
    </Wrapper>
  );
};

export default SettingsButton;
