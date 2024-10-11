import { Modal } from './Modal';

import IconAlert from 'assets/icons/alert.svg';
import Button from './elements/Button';
import { Colors } from 'types/enums';

export const ModalExitTest = () => {
  return (
    <Modal>
      <div className="icon">
        <IconAlert />
      </div>
      <div className="title">Ayrılmak istediğine emin misin?</div>
      <div className="desc">Testi yarıda bırakıyorsun. İstediğin zaman kaldığın sorudan devam edebilirsin.</div>
      <div className="actions">
        <Button color={Colors.Gray} onClick={() => console.log('Vazgeç')}>
          Vazgeç
        </Button>
        <Button color={Colors.Red} onClick={() => console.log('Testten çık')}>
          Testten Çık
        </Button>
      </div>
    </Modal>
  );
};
