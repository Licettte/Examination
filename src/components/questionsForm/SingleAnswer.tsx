import { useActions } from '../../store/actions';
import { useAppSelector } from '../../store/useAppSelector';
import { Radio } from 'antd';
import { Flex } from '../../styles/Flex';

export const SingleAnswer = () => {
  const { setSelectedValue } = useActions();
  const { questions, numberQuestion, selectedValue } = useAppSelector((state) => state.questionsReducer);

  return (
    <div>
      <Radio.Group onChange={(e) => setSelectedValue(e.target.value)} value={selectedValue.answers}>
        <Flex dir="column" align="flex-start">
          {(questions[numberQuestion].answers as string[]).map((answer) => (
            <Radio value={answer}>{answer}</Radio>
          ))}
        </Flex>
      </Radio.Group>
    </div>
  );
};

