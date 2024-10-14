import { Modal, ModalProps } from './Modal';

import { Colors } from 'types/enums';

import React, { FC, memo } from 'react';
import { useAppSelector } from 'store';
import { DUMMY_QUESTIONS } from 'dummy/question';

import IconDivide from 'assets/icons/divide-circle.svg';
import IconMinusCircle from 'assets/icons/minus-circle.svg';
import IconCheckCircle from 'assets/icons/check-circle.svg';
import IconXCircle from 'assets/icons/x-circle.svg';
import Button from 'components/elements/Button/Button';

const ModalResult: FC<ModalProps> = ({ open, onClickConfirm }) => {
  const { user_answers } = useAppSelector(state => state.exam);

  const list_questions = React.useMemo(() => {
    return DUMMY_QUESTIONS.map(i => ({
      id: i.id,
      correct_answer: i.correct_answer,
    }));
  }, []);

  let number_of_corrects = 0;
  let number_of_wrong = 0;

  list_questions.forEach(item => {
    const user_answer = user_answers[item.id];

    if (!user_answers[item.id]) return;
    if (user_answer === item.correct_answer) {
      number_of_corrects = number_of_corrects + 1;
    } else {
      number_of_wrong = number_of_wrong + 1;
    }
  });

  const number_of_net = number_of_corrects - number_of_wrong / 4;

  const number_of_empty = list_questions.length - (number_of_corrects + number_of_wrong);

  const handlerOnClose = () => {
    onClickConfirm?.();
  };

  return (
    <Modal open={open} onClose={handlerOnClose}>
      <div className="Modal-Result">
        <div className="title">Seviye Belirleme Sınav Sonucu</div>
        <div className="result">
          <ResultBox type="net" icon={<IconDivide />} text="Net" result={number_of_net} />
          <ResultBox type="correct" icon={<IconCheckCircle />} text="Doğru" result={number_of_corrects} />
          <ResultBox type="wrong" icon={<IconXCircle />} text="Yanlış" result={number_of_wrong} />
          <ResultBox type="empty" icon={<IconMinusCircle />} text="Boş" result={number_of_empty} />
        </div>

        <div className="actions">
          <Button color={Colors.Green} onClick={onClickConfirm}>
            Yeni Teste Başla
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default memo(ModalResult);

interface ResultBoxProps {
  icon: React.ReactNode;
  text: string;
  result: number;
  type?: 'net' | 'correct' | 'wrong' | 'empty';
}

const ResultBox: FC<ResultBoxProps> = ({ icon, text, result, type }) => {
  return (
    <div className={`Result-Box type-${type}`}>
      <div className="Result-Box-Icon">{icon}</div>
      <div className="Result-Box-Text">
        {result} {text}
      </div>
    </div>
  );
};
