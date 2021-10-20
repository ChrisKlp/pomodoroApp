import styled from 'styled-components';
import media from 'styles/mediaQueries';
import IconButton from 'components/IconButton';
import settingsIcon from 'assets/icon-settings.svg';

const Button = styled(IconButton)`
  margin: 7.9rem auto 4.8rem;

  @media (${media.md}) {
    margin: 6.3rem auto 5.6rem;
  }

  @media (${media.md}) and (orientation: portrait) {
    margin: 14.4rem auto 8rem;
  }
`;

type SettingsButtonProps = {
  onClick: () => void;
};

const SettingsButton: React.FC<SettingsButtonProps> = ({ onClick }) => {
  return <Button src={settingsIcon} onClick={onClick} />;
};
export default SettingsButton;
