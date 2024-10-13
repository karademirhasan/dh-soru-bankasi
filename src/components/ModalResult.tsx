import { Modal, ModalProps } from './Modal';

import Button from './elements/Button';
import { Colors } from 'types/enums';

import { FC } from 'react';

export const ModalResult: FC<ModalProps> = ({ open, onClose, onClickConfirm }) => {
  return (
    <Modal open={open} onClose={onClose}>
      <div className="Modal-Result">
        <div className="title">Seviye Belirleme Sınav Sonucu</div>
        <div className="result">
          NET: 10 <br />
          DOĞRU: 10 <br />
          YANLIŞ: 10 <br />
          BOŞ: 10 <br />
        </div>
        <div className="actions">
          <Button color={Colors.Green} onClick={onClickConfirm}>
            Yeni Teste başla
          </Button>
        </div>
      </div>
    </Modal>
  );
};
