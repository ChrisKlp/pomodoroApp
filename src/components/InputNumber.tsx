import styled from 'styled-components';
import arrowDown from 'assets/icon-arrow-down.svg';
import arrowUp from 'assets/icon-arrow-up.svg';
import { useState } from 'react';
import IconButton from './IconButton';

const Wrapper = styled.div`
  position: relative;
  width: 14rem;
`;

const Input = styled.input`
  padding: 1.5rem;
  width: 100%;
  font-weight: bold;
  font-size: 1.4rem;
  line-height: 1.7rem;
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
  return (
    <Wrapper>
      <Input type="number" value={number} />
      <Group>
        <IconButton
          src={arrowUp}
          onClick={() => setNumber((prev) => prev + 1)}
        />
        <IconButton
          src={arrowDown}
          onClick={() => setNumber((prev) => prev - 1)}
        />
      </Group>
    </Wrapper>
  );
};

export default InputNumber;
