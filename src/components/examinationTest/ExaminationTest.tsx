import { Flex } from '../../styles/Flex';
import { Button } from 'antd';
import React, { useEffect, useState } from 'react';
import { useActions } from '../../store/actions';
import { useAppSelector } from '../../store/useAppSelector';
import { Container, ErrorColor } from '../../styles/style';
import { ProgressBar } from '../progressBar/ProgressBar';
import { getTypeQuestion, isInputForm } from '../../types/questionType';

export const ExaminationTest = () => {
  const { nextQuestion, setIsStopTest } = useActions();
  const { questions, numberQuestion, selectedValue } = useAppSelector((state) => state.questionsReducer);
  const [isError, setError] = useState(false);

  const isArrayAnswer = () => {
    return Array.isArray(selectedValue.answers) ?
      !selectedValue.answers.length : !selectedValue.answers.trim().length;
  };

  const onClickNext = () => {

    if (isArrayAnswer()) {
      setError(true);
      return;
    }
    setError(false);
    nextQuestion();
  };

  const isExistNextQuestion = questions.length !== numberQuestion;
  const typeQuestion = isExistNextQuestion && questions[numberQuestion].type;
  const isBoolean = typeof typeQuestion !== 'boolean';
  const typeAnswer = isBoolean && getTypeQuestion(typeQuestion);
  const textError = isBoolean && (isInputForm.has(typeQuestion) ? 'Введите ответ' : 'Выберите ответ');

  const testPassed = <Flex dir="column">
    Ответы были успешно
    <ErrorColor> не </ErrorColor>
    сохранены
  </Flex>;

  useEffect(() => {
    !isExistNextQuestion && setIsStopTest()
  }, [isExistNextQuestion]);


  return (
    <Container  dir="column" gap={15}>
      {!isExistNextQuestion ?
        testPassed :
        <>
          <ProgressBar numberQuestion={numberQuestion} questions={questions} />
          <Flex dir="column" gap={15}>
            {questions[numberQuestion].question}
            {typeAnswer}
            <Button onClick={() => onClickNext()}> Ответить</Button>
            <ErrorColor> {isError && textError}</ErrorColor>
          </Flex>
        </>
      }
    </Container>
  );
};

