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
import { useContext, useMemo } from 'react';
import { AnswerKeys } from 'components/AnswerKeys';
import { GlobalContext } from 'contexts/GlobalProvider';
import { useAppDispatch, useAppSelector } from 'store';
import { changeShowedAnswers, resetState, updateActiveQuestionID } from 'features/exam/examSlice';
import { useNavigate } from 'react-router-dom';
import { ModalExitExam } from 'components/ModalExitExam';
import { ModalResult } from 'components/ModalResult';

export const Exam = () => {
  const dispatch = useAppDispatch();
  const { user_answers, active_question_id, show_correct_answers } = useAppSelector(state => state.exam);
  const navigate = useNavigate();

  const { openModalExitExam, setOpenModalExitExam, openModalResult, setOpenModalResult } = useContext(GlobalContext);

  const activeQuestion = useMemo(() => {
    return DUMMY_QUESTIONS.find(question => question.id === active_question_id);
  }, [active_question_id]);

  const onClickBack = () => {
    navigate('/');
  };

  const onClickPreviousQuestion = () => {
    if (active_question_id > 1) {
      dispatch(updateActiveQuestionID(active_question_id - 1));
    }
  };

  const onClickNextQuestion = () => {
    if (active_question_id < DUMMY_QUESTIONS.length) {
      dispatch(updateActiveQuestionID(active_question_id + 1));
    }
  };

  const updateActiveQuestion = (question_id: number) => {
    dispatch(updateActiveQuestionID(question_id));
  };

  const onClickEndtoExam = () => {
    setOpenModalExitExam(true);
  };

  const onChangeSwitch = () => {
    dispatch(changeShowedAnswers());
  };

  const onCloseModalExitExam = () => {
    setOpenModalExitExam(false);
  };

  const onClickExitExam = () => {
    setOpenModalExitExam(false);
    setOpenModalResult(true);
  };

  const onCloseModalResult = () => {
    setOpenModalResult(false);
  };

  const onClickNewExam = () => {
    dispatch(resetState());
    setOpenModalResult(false);
  };

  return (
    <div className="Page-Exam">
      <ModalExitExam
        open={openModalExitExam}
        onClose={onCloseModalExitExam}
        onClickConfirm={onClickExitExam}
      ></ModalExitExam>
      <ModalResult open={openModalResult} onClose={onCloseModalResult} onClickConfirm={onClickNewExam}></ModalResult>
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
          <div className="Question-Area">{activeQuestion && <QuestionDetail data={activeQuestion} />}</div>
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
            <Switch label={'Cevapları Göster'} value={show_correct_answers} onChange={onChangeSwitch} />
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
            <AnswerKeys
              updateActiveQuestion={updateActiveQuestion}
              active_question={active_question_id}
              answers={user_answers}
              data={DUMMY_QUESTIONS}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
