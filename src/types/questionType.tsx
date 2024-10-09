import { SingleAnswer } from '../components/questionsForm/SingleAnswer';
import { PluralAnswer } from '../components/questionsForm/PluralAnswer';
import { ShortAnswer } from '../components/questionsForm/ShortAnswer';
import { LongAnswer } from '../components/questionsForm/LongAnswer';

export interface Test {
  isTimer?: boolean,
  test: TestItem[],
  totalSeconds?: number
}

export interface TestItem {
  id: string;
  question: string;
  answers: string[] | string;
  type: QuestionAnswerTypes;
}

export enum QuestionColorTypes {
  CURRENT = 'CURRENT',
  PASSED = 'PASSED',
  REST = 'REST',
  DEFAULT = 'DEFAULT',
}

//цвета должны храниться в цветовых константах.
const TypeQuestionColorLabels: Record<QuestionColorTypes, string> = {
  [QuestionColorTypes.CURRENT]: '#ffffff',
  [QuestionColorTypes.PASSED]: '#3c02a0',
  [QuestionColorTypes.REST]: '#a2aeffa6',
  [QuestionColorTypes.DEFAULT]: 'grey',
};
export const getTypeColor = (typeQuestionKey: QuestionColorTypes) => TypeQuestionColorLabels[typeQuestionKey] ?? '';

export enum QuestionAnswerTypes {
  SINGLE = 'SINGLE',
  PLURAL = 'PLURAL',
  SHORT = 'SHORT',
  LONG = 'LONG',
}

const TypeQuestionLabels: Record<QuestionAnswerTypes, JSX.Element> = {
  [QuestionAnswerTypes.SINGLE]: <SingleAnswer />,
  [QuestionAnswerTypes.PLURAL]: <PluralAnswer />,
  [QuestionAnswerTypes.SHORT]: <ShortAnswer />,
  [QuestionAnswerTypes.LONG]: <LongAnswer />,
};
export const getTypeQuestion = (typeQuestionKey: QuestionAnswerTypes) => TypeQuestionLabels[typeQuestionKey] ?? '';

export const isInputForm = new Set([
  QuestionAnswerTypes.LONG,
  QuestionAnswerTypes.SHORT,
]);
