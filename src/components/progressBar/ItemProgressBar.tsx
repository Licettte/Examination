import React, { FC } from 'react';
import { Item } from './style';
import { getTypeColor, QuestionColorTypes } from '../../types/questionType';

interface ItemProgressBarProps {
  numberQuestion: number;
  index: number;
}

export const ItemProgressBar: FC<ItemProgressBarProps> = ({ numberQuestion, index }) => {

  const setColor = () => {
    if (index === numberQuestion) {
      return QuestionColorTypes.CURRENT;
    } else {
      return index < numberQuestion ? QuestionColorTypes.PASSED : QuestionColorTypes.REST;
    }
  };

  return <Item color={getTypeColor(setColor())} />;
};

