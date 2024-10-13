import IconLesson from 'assets/icons/lesson.svg';
import { DUMMY_EXAM_DETAIL, Question } from 'dummy/question';
import { UserAnswers } from 'features/exam/examSlice';

interface AnswerKeysProps {
  data: Question[];
  answers: UserAnswers;
  active_question: number;
  updateActiveQuestion: (question_id: number) => void;
}

export const AnswerKeys = ({ data, answers, active_question, updateActiveQuestion }: AnswerKeysProps) => {
  return (
    <div className="AnswerKeys">
      <div className="AnswerKeys-Header">
        <div className="exam-info">
          <div className="exam-icon">
            <IconLesson />
          </div>
          <div className="exam-summary">
            <div className="exam-name">{DUMMY_EXAM_DETAIL.lesson}</div>
            <div className="exam-numbers">{data.length} Soru</div>
          </div>
        </div>
      </div>
      <div className="AnswerKeys-Questions">
        {data.map(question => {
          return (
            <AnswerKey
              onClickUpdateActiveQuestion={updateActiveQuestion}
              is_active_question={question.id === active_question}
              answer={answers?.[question.id]}
              key={question.id}
              question={question}
            />
          );
        })}
      </div>
    </div>
  );
};

const AnswerKey = ({
  question,
  answer,
  is_active_question,
  onClickUpdateActiveQuestion,
}: {
  question: Question;
  answer: number | null | string;
  is_active_question: boolean;
  onClickUpdateActiveQuestion: (question_id: number) => void;
}) => {
  const handlerOnClickUpdateActiveQuestion = () => {
    onClickUpdateActiveQuestion(question.id);
  };
  return (
    <div onClick={handlerOnClickUpdateActiveQuestion} className={`AnswerKey ${is_active_question ? 'active' : ''}`}>
      <div className="question-number">{question.id}. Soru</div>
      <div className="options">
        {['A', 'B', 'C', 'D', 'E'].map((option, index) => {
          return (
            <div key={index} className={`option ${answer === option ? 'selected' : ''}`}>
              {option}
            </div>
          );
        })}
      </div>
    </div>
  );
};
