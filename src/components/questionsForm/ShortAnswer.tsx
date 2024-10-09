import { Input } from 'antd';
import { useActions } from '../../store/actions';
import { useAppSelector } from '../../store/useAppSelector';

export const ShortAnswer = () => {
  const { setSelectedValue } = useActions();
  const { selectedValue } = useAppSelector((state) => state.questionsReducer);

  const MAX_LENGTH_INPUT = 64;
  return <Input
    maxLength={MAX_LENGTH_INPUT}
    placeholder="Введите ответ на вопрос*"
    onChange={(e) => setSelectedValue(e.target.value)}
    value={selectedValue.answers} />;
};
