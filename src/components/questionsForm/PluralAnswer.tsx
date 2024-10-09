import { useActions } from '../../store/actions';
import { useAppSelector } from '../../store/useAppSelector';
import { Checkbox } from 'antd';
import { Flex } from '../../styles/Flex';

export const PluralAnswer = () => {
  const { setSelectedValue } = useActions();
  const { questions, numberQuestion } = useAppSelector((state) => state.questionsReducer);

  const answers = (questions[numberQuestion].answers as string[]).map((answer) => ({
    label: answer,
    value: answer,
  }));

  return (
    <Flex dir="column" align="flex-start">
      <Checkbox.Group
        options={answers}
        defaultValue={['Apple']}
        onChange={(e) => setSelectedValue(e)}
        style={{color: 'white'}}
      />
    </Flex>
  );
};
