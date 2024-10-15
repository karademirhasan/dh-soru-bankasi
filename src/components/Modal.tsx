import ReactDOM from 'react-dom';
import React, { useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import IconButton from 'components/Elements/IconButton/IconButton';
import { Colors } from 'types/enums';

import IconClose from 'assets/icons/close.svg';
import { Question } from 'types/interfaces';
export interface ModalProps {
  children?: React.ReactNode;
  open: boolean;
  onClose: () => void;
  onClickConfirm?: () => void;
  questions?: Question[];
}

export const Modal: React.FC<ModalProps> = ({ children, open, onClose }) => {
  const nodeRef = useRef(null);
  if (!open) return null;

  return (
    <Portal>
      <div className={`Modal`}>
        <CSSTransition
          onEnter={() => console.log('entered')}
          onExited={() => console.log('exited')}
          nodeRef={nodeRef}
          in={open}
          classNames={'alert'}
          timeout={300}
          unmountOnExit
        >
          <div className={`Modal-Container`}>
            <div className="Modal-Container-Header">
              <IconButton color={Colors.Transparent} onClick={onClose}>
                <IconClose />
              </IconButton>
            </div>
            <div className="Modal-Container-Content">{children}</div>
          </div>
        </CSSTransition>
      </div>
    </Portal>
  );
};

const Portal: React.FC<{ children: React.ReactNode; container?: Element }> = ({ children, container }) => {
  const modalRoot = container || document.getElementById('modal-root');
  if (!modalRoot) return null;
  return ReactDOM.createPortal(children, modalRoot);
};
