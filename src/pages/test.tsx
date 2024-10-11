import IconArrowLeft from 'assets/icons/arrow-left.svg';
import IconButton from 'components/elements/IconButton';
import { ButtonVariant, Colors, IconDirection, Sizes } from 'types/enums';

import IconChevronLeft from 'assets/icons/chevron-left.svg';
import IconChevronRight from 'assets/icons/chevron-right.svg';
import IconPower from 'assets/icons/power.svg';

import Button from 'components/elements/Button';
import { DUMMY_QUESTIONS, DUMMY_TEST_DETAIL } from 'dummy/question';
import { QuestionDetail } from 'components/QuestionDetail';
import { IconWrapper } from 'components/elements/IconWrapper';
import { Switch } from 'components/elements/Switch';
import { useContext, useState } from 'react';
import { AnswerKeys } from 'components/AnswerKeys';
import { ModalExitTest } from 'components/ModalExitTest';
import { GlobalContext } from 'contexts/GlobalProvider';

export const Test = () => {
  const { openModalExitTest, setOpenModalExitTest } = useContext(GlobalContext);

  const onClickBack = () => {
    console.log('Back');
  };

  const onClickPreviousQuestion = () => {
    console.log('Previous Question');
  };

  const onClickNextQuestion = () => {
    console.log('Next Question');
  };

  const onClickEndtoTest = () => {
    setOpenModalExitTest(true);
  };

  const [valueSwitch, setValueSwitch] = useState(false);

  const onChangeSwitch = (value: boolean) => {
    console.log('Switch', value);
    setValueSwitch(value);
  };

  const onCloseModalExitTest = () => {
    setOpenModalExitTest(false);
  };

  const onClickExitTest = () => {
    console.log('Exit Test');
    setOpenModalExitTest(false);
  };

  return (
    <div className="Page-Test">
      <ModalExitTest
        open={openModalExitTest}
        onClose={onCloseModalExitTest}
        onClickConfirm={onClickExitTest}
      ></ModalExitTest>
      <div className="Page-Test-Header">
        <IconButton size={Sizes.Small} onClick={onClickBack}>
          <IconArrowLeft />
        </IconButton>
      </div>
      <div className="Page-Test-Container">
        <div className="Question">
          <div className="Question-Header">
            <h2>{DUMMY_TEST_DETAIL.test_name}</h2>
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
              onClick={onClickEndtoTest}
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
