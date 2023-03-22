export type SimpleQuestion = {
    type: 'simple',
    question: string,
    answers: string[],
    correctAnswers: boolean[]
};

export type MultipleQuestion = {
    type: 'multiple',
    question: string,
    answers: string[],
    correctAnswers: boolean[]
};

export type FieldQuestion = {
    type: 'field',
    question: string,
    correctAnswers: string
};

export type Question = SimpleQuestion | MultipleQuestion | FieldQuestion;

export type Questions = Question[];
