import React from 'react';
import styled, { css } from 'styled-components';
import { mediaquery } from '@styles/mediaquery';
import { FaTimes } from 'react-icons/fa';
import { ModalProps } from './types';

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 10;
`;

const Overlay = styled.div`
  background: rgba(0, 0, 0, 0.8);
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
`;

const Content = styled.div`
  width: 90vw;
  background: white;
  padding: 50px;
  border-radius: 10px;
  box-shadow: 0 10px 6px -6px rgba(0, 0, 0, 0.5);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  ${mediaquery.md(css`
    width: 70vw;
  `)}
`;

const Close = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
`;

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  return (
    (isOpen && (
      <Wrapper>
        <Overlay onClick={onClose} />
        <Content>
          <Close onClick={onClose} title="Close">
            <FaTimes />
          </Close>
          {children}
        </Content>
      </Wrapper>
    )) ||
    null
  );
};

export default Modal;
