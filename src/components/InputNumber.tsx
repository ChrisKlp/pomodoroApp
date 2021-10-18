import styled from 'styled-components';
import arrowDown from 'assets/icon-arrow-down.svg';
import arrowUp from 'assets/icon-arrow-up.svg';
import { useState } from 'react';
import media from 'styles/mediaQueries';
import IconButton from 'components/IconButton';

const Wrapper = styled.div`
  position: relative;
  max-width: 14rem;
  width: 100%;

  @media (${media.md}) {
    max-width: unset;
  }
`;

const Input = styled.input`
  padding: 1.5rem;
  width: 100%;
  font-weight: bold;
  font-size: 1.4rem;
  line-height: 1.7rem;
  font-family: inherit;
  color: ${({ theme }) => theme.grayishDark};
  background-color: ${({ theme }) => theme.gray};
  border-radius: 1rem;
  border: 0;

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  &[type='number'] {
    -moz-appearance: textfield;
  }
`;

const Group = styled.div`
  position: absolute;
  height: 100%;
  top: 0;
  right: 1.2rem;
  display: grid;
  align-content: center;

  button {
    padding: 0.4rem;
  }
`;

type InputNumberProps = {};

const InputNumber: React.FC<InputNumberProps> = () => {
  const [number, setNumber] = useState(0);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    if (value > 59) {
      setNumber(Number(59));
    } else {
      setNumber(value);
    }
  };

  return (
    <Wrapper>
      <Input
        type="number"
        value={number}
        onChange={handleChange}
        min={0}
        max={59}
      />
      <Group>
        <IconButton
          src={arrowUp}
          onClick={() => setNumber((prev) => prev + 1)}
          disabled={number >= 59}
        />
        <IconButton
          src={arrowDown}
          onClick={() => setNumber((prev) => prev - 1)}
          disabled={number <= 0}
        />
      </Group>
    </Wrapper>
  );
};

export default InputNumber;
