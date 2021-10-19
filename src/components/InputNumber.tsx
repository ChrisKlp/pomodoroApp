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

type InputNumberProps = {
  name: string;
  value: number;
  valueUp: () => void;
  valueDown: () => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const InputNumber: React.FC<InputNumberProps> = ({
  name,
  value,
  valueUp,
  valueDown,
  onChange,
}) => {
  return (
    <Wrapper>
      <Input
        type="number"
        name={name}
        value={value}
        onChange={onChange}
        min={0}
        max={59}
      />
      <Group>
        <IconButton
          src={arrowUp}
          onClick={() => valueUp()}
          disabled={value >= 59}
        />
        <IconButton src={arrowDown} onClick={valueDown} disabled={value <= 0} />
      </Group>
    </Wrapper>
  );
};

export default InputNumber;
