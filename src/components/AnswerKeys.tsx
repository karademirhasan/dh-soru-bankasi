import React from 'react';

import IconLesson from 'assets/icons/lesson.svg';
import { DUMMY_TEST_DETAIL, Question } from 'dummy/question';

export const AnswerKeys = ({ data }) => {
  console.log('data', data);
  return (
    <div className="AnswerKeys">
      <div className="AnswerKeys-Header">
        <div className="test-info">
          <div className="test-icon">
            <IconLesson />
          </div>
          <div className="test-summary">
            <div className="test-name">{DUMMY_TEST_DETAIL.lesson}</div>
            <div className="test-numbers">{data.length} Soru</div>
          </div>
        </div>
      </div>
      <div className="AnswerKeys-Questions">
        {[...data, ...data].map((question, index) => {
          return <AnswerKey question={question} />;
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
