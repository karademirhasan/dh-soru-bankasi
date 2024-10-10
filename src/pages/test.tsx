import IconArrowLeft from 'assets/icons/arrow-left.svg';
import IconButton from 'components/elements/IconButton';
import { Backgrounds, IconDirection, Sizes } from 'types/enums';

import IconChevronLeft from 'assets/icons/chevron-left.svg';
import IconChevronRight from 'assets/icons/chevron-right.svg';
import Button from 'components/elements/Button';
import { DUMMY_QUESTIONS } from 'dummy/question';
import { QuestionDetail } from 'components/QuestionDetail';

export const Test = () => {
  const onClickBack = () => {
    console.log('Back');
  };

  const onClickPreviousQuestion = () => {
    console.log('Previous Question');
  };

  const onClickNextQuestion = () => {
    console.log('Next Question');
  };
  return (
    <div className="Page-Test">
      <div className="Question">
        <div className="Question-Header">
          <div className="exit-test">
            <IconButton size={Sizes.Small} onClick={onClickBack}>
              <IconArrowLeft />
            </IconButton>
          </div>
          <h2>Konu Tarama Testi #1</h2>
        </div>
        <div className="Question-Area">
          <QuestionDetail data={DUMMY_QUESTIONS[0]} />
        </div>
        <div className="Question-Footer">
          <Button icon={<IconChevronLeft />} iconDirection={IconDirection.Start} onClick={onClickPreviousQuestion}>
            Önceki Soru
          </Button>

          <Button
            icon={<IconChevronRight />}
            background={Backgrounds.Yellow}
            iconDirection={IconDirection.End}
            onClick={onClickNextQuestion}
          >
            Sonraki Soru
          </Button>
        </div>
      </div>
      <div className="Answer">
        <div className="Answer-Header"></div>
        <div className="Answer-Area"></div>
      </div>
    </div>
  );
};
