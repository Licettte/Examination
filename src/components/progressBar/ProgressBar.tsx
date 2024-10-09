import { TestItem } from '../../types/questionType';
import { ItemProgressBar } from './ItemProgressBar';
import { Flex } from '../../styles/Flex';
import { FC } from 'react';

interface ProgressBarProps {
  numberQuestion: number;
  questions: TestItem[];
}

export const ProgressBar: FC<ProgressBarProps> = ({ numberQuestion, questions }) => {

 //как вариант,ProgressBar можно было сделать через svg.
  return (
    <Flex dir="row" gap={5}>
      {questions.map((item, index) => (
        <ItemProgressBar key={item.id} index={index} numberQuestion={numberQuestion} />
      ))}
    </Flex>
  );
};

