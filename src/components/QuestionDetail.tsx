import { Question } from 'dummy/question';
import React, { ReactNode } from 'react';
import IconButton from './elements/IconButton';
import { Backgrounds, Colors, Sizes } from 'types/enums';

import IconBrush from 'assets/icons/brush.svg';
import IconZoomIn from 'assets/icons/zoom-in.svg';
import IconZoomOut from 'assets/icons/zoom-out.svg';
import IconAlert from 'assets/icons/alert-circle.svg';
import Badge from './elements/Badge';
import Button from './elements/Button';

interface QuestionDetailProps {
  data: Question;
}

export const QuestionDetail = ({ data }: QuestionDetailProps) => {
  return (
    <div className="QuestionDetail">
      <div className="QuestionDetail-Heading">
        <Badge>Soru: Türkçe #{data.id}</Badge>
        <div className="QuestionDetail-Heading-Actions">
          <IconButton size={Sizes.Medium} background={Backgrounds.Gray} onClick={() => console.log('Bookmark')}>
            <IconBrush />
          </IconButton>
          <IconButton size={Sizes.Medium} background={Backgrounds.Gray} onClick={() => console.log('Bookmark')}>
            <IconZoomIn />
          </IconButton>
          <IconButton size={Sizes.Medium} background={Backgrounds.Gray} onClick={() => console.log('Bookmark')}>
            <IconZoomOut />
          </IconButton>
          <IconButton
            color={Colors.Red}
            size={Sizes.Medium}
            background={Backgrounds.LightGray}
            onClick={() => console.log('Bookmark')}
          >
            <IconAlert />
          </IconButton>
        </div>
      </div>
      <div className="QuestionDetail-Text" dangerouslySetInnerHTML={{ __html: data.question }}></div>
      <div className="QuestionDetail-Options">
        {Object.keys(data.options)?.map((option, index) => {
          return (
            <Option
              key={index}
              data={{
                key: option,
                text: data.options[option],
              }}
            />
          );
        })}
      </div>
    </div>
  );
};

const Option = ({
  data,
}: {
  data: {
    key: string;
    text: string;
  };
}) => {
  const { key, text } = data;

  return (
    <div className="Option">
      <span className="check"></span>
      <div className="answer">
        <span>
          {key}
          {`)`}
          {` `}
        </span>
        <span dangerouslySetInnerHTML={{ __html: text }}></span>
      </div>
      <div className="action">
        <Button
          size={Sizes.Small}
          color={Colors.White}
          onClick={() => console.log('qwe')}
          background={Backgrounds.Green}
        >
          Cevapla
        </Button>
      </div>
    </div>
  );
};
