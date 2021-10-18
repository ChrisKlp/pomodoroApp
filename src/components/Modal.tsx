import styled from 'styled-components';
import media from 'styles/mediaQueries';

const Wrapper = styled.div`
  position: absolute;
  display: grid;
  width: 100%;
  min-height: 100%;
  left: 0;
  top: 0;
  z-index: 9999;

  button {
    cursor: pointer;
  }

  @media (${media.md}) {
    align-content: center;
  }
`;

const Overlay = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  background-color: #0a0c1c;
  opacity: 0.5;
  z-index: -1;
`;

type ModalProps = {
  className?: string;
};

const Modal: React.FC<ModalProps> = ({ children, className }) => {
  return (
    <Wrapper>
      <Overlay />
      <div className={className}>{children}</div>
    </Wrapper>
  );
};

export default Modal;
