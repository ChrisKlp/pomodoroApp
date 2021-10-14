import styled, { css } from 'styled-components';
import iconCheck from 'assets/icon-check.svg';

const SettingsButton = styled.button<{
  color?: string;
  font?: string;
  active?: boolean;
  checked?: boolean;
}>`
  position: relative;
  width: 4rem;
  height: 4rem;
  background-color: ${({ theme, color }) => color || theme.gray};
  border-radius: 50%;
  font-family: ${({ font }) => font || 'Kumbh Sans'};
  font-weight: bold;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.dark};
  text-align: center;

  ::before {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 5rem;
    height: 5rem;
    border: 1px solid ${({ theme }) => theme.gray};
    border-radius: 50%;
    transform: translate(-50%, -50%) scale(0.8);
    transition: transform 0.2s, opacity 0.2s;
    opacity: 0;
    content: '';
  }

  :hover {
    ::before {
      transform: translate(-50%, -50%) scale(1);
      opacity: 1;
    }
  }

  ${({ active }) =>
    active &&
    css`
      background-color: ${({ theme }) => theme.dark};
      color: ${({ theme }) => theme.white};
    `};

  ${({ checked }) =>
    checked &&
    css`
      ::after {
        content: url(${iconCheck});
      }
    `};
`;

export default SettingsButton;
