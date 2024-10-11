import { Modal, ModalProps } from './Modal';

import IconAlert from 'assets/icons/alert.svg';
import Button from './elements/Button';
import { Colors } from 'types/enums';

import { FC } from 'react';

export const ModalExitTest: FC<ModalProps> = ({ open, onClose, onClickConfirm }) => {
  return (
    <Modal open={open} onClose={onClose}>
      <div className="Modal-ExitTest">
        <div className="icon">
          <IconAlert />
        </div>
        <div className="title">Ayrılmak istediğine emin misin?</div>
        <div className="desc">Testi yarıda bırakıyorsun. İstediğin zaman kaldığın sorudan devam edebilirsin.</div>
        <div className="actions">
          <Button color={Colors.Gray} onClick={onClose}>
            Vazgeç
          </Button>
          <Button color={Colors.Red} onClick={onClickConfirm}>
            Testten Çık
          </Button>
        </div>
      </div>
    </Modal>
  );
};
