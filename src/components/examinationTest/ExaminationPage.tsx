import React from 'react';
import { ExaminationTest } from './ExaminationTest';
import { Button } from 'antd';
import { Flex } from '../../styles/Flex';
import { useActions } from '../../store/actions';
import { Timer } from '../timer/Timer';
import { useAppSelector } from '../../store/useAppSelector';
import { TimerWrapper } from '../timer/style';

export const ExaminationPage = () => {
  const { resetTest, setIsStartTest } = useActions();
  const { isStartTest } = useAppSelector((state) => state.questionsReducer);

  const startTest = () => {
    resetTest();
    setIsStartTest();
  };

  return (
    <Flex dir="column" gap={15}>

      {isStartTest ?
        <>
          <Flex dir="row">
            Тестирование
            <TimerWrapper align="center" justify="center">
              <Timer />
            </TimerWrapper>
          </Flex>
          <ExaminationTest />
        </>
        :
        <Button onClick={() => startTest()}> Начать тест</Button>
      }
    </Flex>
  );
};

