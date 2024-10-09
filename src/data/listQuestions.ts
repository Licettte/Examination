import { QuestionAnswerTypes, Test, TestItem } from '../types/questionType';

export const listQuestions1: Test = {
  isTimer: true,
  totalSeconds: 6000,
  test: [
    {
      id: '1',
      question: 'Что должен знать React разработчик?',
      answers: ['HTML', 'CSS', 'Как правильно гладить котиков'],
      type: QuestionAnswerTypes.SHORT,
    },

    {
      id: '2',
      question: 'Какой yтилиты не существсует?',
      answers: ['Pick ', 'Cherry Pick ', 'Readonly'],
      type: QuestionAnswerTypes.SINGLE,
    },
    {
      id: '3',
      question: 'Куда можно встроить готовый код из метода render()?',
      answers: '',
      type: QuestionAnswerTypes.SHORT,
    }
    ,
    {
      id: '4',
      question: 'Для чего в React используется API \'Context\'?',
      answers: '', type: QuestionAnswerTypes.LONG,
    },
    {
      id: '5',
      question: 'Что должен знать React разработчик?',
      answers: ['HTML', 'CSS', 'Как правильно гладить котиков'], type: QuestionAnswerTypes.SINGLE,
    },
    {
      id: '6',
      question: 'Какой yтилиты не существсует?',
      answers: ['Pick ', 'Cherry Pick ', 'Readonly'], type: QuestionAnswerTypes.PLURAL,
    },
    {
      id: '7',
      question: 'Куда можно встроить готовый код из метода render()?',
      answers: ['В любой тег', 'В div или же в span', 'в тег, у которого есть id'], type: QuestionAnswerTypes.PLURAL,
    }
    ,
    {
      id: '8',
      question: 'Для чего в React используется API \'Context\'?',
      answers: ['Для повышения производительности',
        'Для управления жизненным циклом компонентов',
        'Для передачи данных между компонентами без необходимости передачи свойств',
      ],
      type: QuestionAnswerTypes.PLURAL,
    },
  ]};


export const listAnswer1: TestItem[] = [
  {
    id: '1',
    question: 'Что должен знать React разработчик?',
    answers: "",
    type: QuestionAnswerTypes.PLURAL,
  },
  {
    id: '2',
    question: 'Какой yтилиты не существсует?',
    answers: "",
    type: QuestionAnswerTypes.SINGLE,
  },
  {
    id: '3',
    question: 'Куда можно встроить готовый код из метода render()?',
    answers: '',
    type: QuestionAnswerTypes.SHORT,
  }
  ,
  {
    id: '4',
    question: 'Для чего в React используется API \'Context\'?',
    answers: '', type: QuestionAnswerTypes.LONG,
  },
  {
    id: '5',
    question: 'Что должен знать React разработчик?',
    answers: "", type: QuestionAnswerTypes.SINGLE,
  },
  {
    id: '6',
    question: 'Какой yтилиты не существсует?',
    answers: "", type: QuestionAnswerTypes.PLURAL,
  },
  {
    id: '7',
    question: 'Куда можно встроить готовый код из метода render()?',
    answers: "", type: QuestionAnswerTypes.PLURAL,
  }
  ,
  {
    id: '8',
    question: 'Для чего в React используется API \'Context\'?',
    answers: "",
    type: QuestionAnswerTypes.PLURAL,
  },
];
