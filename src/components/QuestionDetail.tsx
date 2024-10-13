import { Question } from 'dummy/question';
import IconButton from './elements/IconButton';
import { Colors, Sizes } from 'types/enums';

import IconBrush from 'assets/icons/brush.svg';
import IconZoomIn from 'assets/icons/zoom-in.svg';
import IconZoomOut from 'assets/icons/zoom-out.svg';
import IconAlert from 'assets/icons/alert-circle.svg';
import IconPlay from 'assets/icons/play.svg';

import Badge from './elements/Badge';
import Button from './elements/Button';
import { useAppDispatch, useAppSelector } from 'store';
import { updateUserAnswers } from 'features/exam/examSlice';

interface QuestionDetailProps {
  data: Question;
}

export const QuestionDetail = ({ data }: QuestionDetailProps) => {
  const dispatch = useAppDispatch();

  const { user_answers } = useAppSelector(state => state.exam);
  const onClickAnwser = (question_id: number, option_key: string) => {
    dispatch(updateUserAnswers({ question_id, option_key }));
  };

  return (
    <div className="QuestionDetail">
      <div className="QuestionDetail-Heading">
        <Badge>Soru: Türkçe #{data?.id}</Badge>
        <div className="QuestionDetail-Heading-Actions">
          <IconButton size={Sizes.Medium} color={Colors.Gray} onClick={() => console.log('Bookmark')}>
            <IconBrush />
          </IconButton>
          <IconButton size={Sizes.Medium} color={Colors.Gray} onClick={() => console.log('Bookmark')}>
            <IconZoomIn />
          </IconButton>
          <IconButton size={Sizes.Medium} color={Colors.Gray} onClick={() => console.log('Bookmark')}>
            <IconZoomOut />
          </IconButton>
          <IconButton size={Sizes.Medium} color={Colors.Gray} onClick={() => console.log('Bookmark')}>
            <IconAlert />
          </IconButton>
        </div>
      </div>
      <div className="QuestionDetail-Text" dangerouslySetInnerHTML={{ __html: data.question }}></div>
      <div className="QuestionDetail-Options">
        {Object.keys(data?.options)?.map((option, index) => {
          return (
            <Option
              user_answer={user_answers[data?.id]}
              onClickAnwser={onClickAnwser}
              key={index}
              option_key={option}
              question_id={data?.id}
              text={data?.options[option]}
              correct_answer={data?.correct_answer}
            />
          );
        })}
      </div>
    </div>
  );
};

interface IOption {
  user_answer: string;
  onClickAnwser: (question_id: number, option_key: string) => void;
  option_key: string;
  question_id: number;
  text: string;
  correct_answer: string;
}

const Option = ({ user_answer, onClickAnwser, option_key, question_id, text, correct_answer }: IOption) => {
  const { show_correct_answers } = useAppSelector(state => state.exam);

  const is_selected = user_answer === option_key;
  const is_correct = correct_answer === option_key;
  const is_selected_and_correct = show_correct_answers && is_selected && is_correct;
  const is_selected_and_wrong = show_correct_answers && is_selected && !is_correct;
  const is_mark_correct_answer = user_answer && show_correct_answers && is_correct && !is_selected_and_correct;

  const classname = `Option
      ${is_selected && !show_correct_answers ? 'selected' : ''}
      ${is_selected_and_correct ? 'selected-correct' : ''}
      ${is_mark_correct_answer ? 'mark-correct' : ''}
      ${is_selected_and_wrong ? 'selected-wrong' : ''}`;
  return (
    <div className={classname}>
      <span className="Option-Check"></span>
      <div className="Option-Text">
        <span>
          {option_key}
          {`)`}
          {` `}
        </span>
        <span dangerouslySetInnerHTML={{ __html: text }}></span>
      </div>
      <div className="Option-Actions">
        {user_answer ? null : (
          <Button
            className="button-answer"
            size={Sizes.Small}
            color={Colors.Green}
            onClick={() => onClickAnwser(question_id, option_key)}
          >
            Cevapla
          </Button>
        )}
        {is_mark_correct_answer ? (
          <Button
            icon={<IconPlay />}
            size={Sizes.Small}
            color={Colors.Green}
            onClick={() => console.log('Çözüm Videosu')}
          >
            Çözüm Videosu
          </Button>
        ) : null}
      </div>
    </div>
  );
};
