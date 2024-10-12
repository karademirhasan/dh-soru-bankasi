import IconArrowLeft from 'assets/icons/arrow-left.svg';
import IconButton from 'components/elements/IconButton';
import { ButtonVariant, Colors, IconDirection, Sizes } from 'types/enums';

import IconChevronLeft from 'assets/icons/chevron-left.svg';
import IconChevronRight from 'assets/icons/chevron-right.svg';
import IconPower from 'assets/icons/power.svg';

import Button from 'components/elements/Button';
import { DUMMY_QUESTIONS, DUMMY_EXAM_DETAIL } from 'dummy/question';
import { QuestionDetail } from 'components/QuestionDetail';
import { IconWrapper } from 'components/elements/IconWrapper';
import { Switch } from 'components/elements/Switch';
import { useContext, useState } from 'react';
import { AnswerKeys } from 'components/AnswerKeys';
import { GlobalContext } from 'contexts/GlobalProvider';
import { ModalExitExam } from 'components/ModalExitExam';

export const Exam = () => {
  const { openModalExitExam, setOpenModalExitExam } = useContext(GlobalContext);

  const onClickBack = () => {
    console.log('Back');
  };

  const onClickPreviousQuestion = () => {
    console.log('Previous Question');
  };

  const onClickNextQuestion = () => {
    console.log('Next Question');
  };

  const onClickEndtoExam = () => {
    setOpenModalExitExam(true);
  };

  const [valueSwitch, setValueSwitch] = useState(false);

  const onChangeSwitch = (value: boolean) => {
    console.log('Switch', value);
    setValueSwitch(value);
  };

  const onCloseModalExitExam = () => {
    setOpenModalExitExam(false);
  };

  const onClickExitExam = () => {
    console.log('Exit Exam');
    setOpenModalExitExam(false);
  };

  return (
    <div className="Page-Exam">
      <ModalExitExam
        open={openModalExitExam}
        onClose={onCloseModalExitExam}
        onClickConfirm={onClickExitExam}
      ></ModalExitExam>
      <div className="Page-Exam-Header">
        <IconButton size={Sizes.Small} onClick={onClickBack}>
          <IconArrowLeft />
        </IconButton>
      </div>
      <div className="Page-Exam-Container">
        <div className="Question">
          <div className="Question-Header">
            <h2>{DUMMY_EXAM_DETAIL.exam_name}</h2>
          </div>
          <div className="Question-Area">
            <QuestionDetail data={DUMMY_QUESTIONS[0]} />
          </div>
          <div className="Question-Footer">
            <Button
              icon={<IconChevronLeft />}
              color={Colors.Gray}
              iconDirection={IconDirection.Start}
              onClick={onClickPreviousQuestion}
            >
              Önceki Soru
            </Button>

            <Button
              icon={<IconChevronRight />}
              color={Colors.Gray}
              iconDirection={IconDirection.End}
              onClick={onClickNextQuestion}
            >
              Sonraki Soru
            </Button>
          </div>
        </div>
        <div className="Answer">
          <div className="Answer-Header">
            <Switch label={'Cevapları Göster'} value={valueSwitch} onChange={onChangeSwitch} />
            <Button
              icon={
                <IconWrapper>
                  <IconPower />
                </IconWrapper>
              }
              variant={ButtonVariant.Yellow}
              iconDirection={IconDirection.Start}
              onClick={onClickEndtoExam}
            >
              Testi Bitir
            </Button>
          </div>
          <div className="Answer-Area">
            <AnswerKeys data={DUMMY_QUESTIONS} />
          </div>
        </div>
      </div>
    </div>
  );
};
