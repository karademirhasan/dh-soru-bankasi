import IconLesson from 'assets/icons/lesson.svg';
import { DUMMY_EXAM_DETAIL, Question } from 'dummy/question';

interface AnswerKeysProps {
  data: Question[];
}

export const AnswerKeys = ({ data }: AnswerKeysProps) => {
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
        {[...data, ...data].map((question, index) => {
          return <AnswerKey key={index} question={question} />;
        })}
      </div>
    </div>
  );
};

const AnswerKey = ({ question }: { question: Question }) => {
  return (
    <div className="AnswerKey">
      <div className="question-number">{question.id}. Soru</div>
      <div className="options">
        {['A', 'B', 'C', 'D', 'E'].map((option, index) => {
          return (
            <div key={index} className="option">
              {option}
            </div>
          );
        })}
      </div>
    </div>
  );
};
