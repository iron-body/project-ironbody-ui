import React from 'react';

import { ModalContainer, ModalContent } from './BasicModalWindow.styled';

const BasicModalWindow = ({ active, setActive, children }) => {
  return (
    <ModalContainer
      className={active ? 'modal active' : 'modal'}
      onClick={() => setActive(false)}
    >
      <ModalContent
        className={active ? 'modal__content active' : 'modal__content'}
        onClick={e => e.stopPropagation}
      >
        {children}
      </ModalContent>
    </ModalContainer>
  );
};

export default BasicModalWindow;
