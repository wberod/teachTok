// src/types/MCQ.ts

interface MCQ {
    [x: string]: any;
    id: number;
    question: string;
    choices: string[];
    correctAnswer: string;
  }
  
  export default MCQ;
  