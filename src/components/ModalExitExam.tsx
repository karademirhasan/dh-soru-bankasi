import { Modal, ModalProps } from './Modal';

import IconAlert from 'assets/icons/alert.svg';
import Button from 'components/Elements/Button/Button';
import { Colors } from 'types/enums';

import { FC, memo } from 'react';

const ModalExitExam: FC<ModalProps> = memo(({ open, onClose, onClickConfirm }) => {
  return (
    <Modal open={open} onClose={onClose}>
      <div className="Modal-ExitExam">
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
});

export default memo(ModalExitExam);
