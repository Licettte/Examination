import React from 'react';
import { useActions } from '../../store/actions';
import { useAppSelector } from '../../store/useAppSelector';
import { TextAreaCustom } from './style';

export const LongAnswer = () => {
  const { setSelectedValue } = useActions();
  const { selectedValue } = useAppSelector((state) => state.questionsReducer);

  const MAX_LENGTH_TEXT_AREA = 1024;

  return <TextAreaCustom
    maxLength={MAX_LENGTH_TEXT_AREA}
    placeholder="Введите ответ на вопрос*"
    autoSize={{ minRows: 1, maxRows: 4 }}
    onChange={(e) => setSelectedValue(e.target.value)}
    value={selectedValue.answers}
  />;
};

