import React from 'react';
import styled from 'styled-components';
import { ModalProps } from './types';

const Overlay = styled.div`
  background: rgba(0, 0, 0, 0.8);
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Content = styled.div`
  width: 70vw;
  background: white;
  padding: 50px;
  border-radius: 10px;
  box-shadow: 0 10px 6px -6px rgba(0, 0, 0, 0.5);
  z-index: 10;
`;

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  return (
    (isOpen && (
      <Overlay onClick={onClose}>
        <Content>
          <button onClick={onClose}>Close</button>
          {children}
        </Content>
      </Overlay>
    )) ||
    null
  );
};

export default Modal;
