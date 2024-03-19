import Answer from "./Answer";
import { useState } from "react";

interface Question {
  type: string;
  difficulty: string;
  category: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
}

interface QuestionsType {
  // response_code:number;
  data: { results: Question[] };
}

// const Questions = ({ data }: QuestionsType) => {
const Questions = ({ answers, question, currentQuestion }) => {
  const allAnswers = [answers.correctAnswer, ...answers.incorrectAnswers];
  console.log(allAnswers);

  // const [currentQuestion, setCurrentQuestion] = useState(0);
  // const [answers, setAnswers] = useState({correctAnswer:"", incorrectAnswers:[]})
  // console.log(data);
  // const { results } = data;
  // const questionObject = results[currentQuestion];
  // const { question, correct_answer, incorrect_answers } = questionObject;
  // setAnswers({correctAnswer:correct_answer, incorrectAnswers:incorrect_answers})
  // console.log(answers)

  // const correctAnswerObject = {
  //   value: correct_answer,
  //   isCorrect: true,
  //   id: crypto.randomUUID(),
  // };

  // const incorrectAnswersObjects = incorrect_answers.map((answer) => ({
  //   value: answer,
  //   isCorrect: false,
  //   id: crypto.randomUUID(),
  // }));

  // const shuffle = (array: string[]) => {
  //   for (let i = array.length - 1; i > 0; i--) {
  //     const j = Math.floor(Math.random() * (i + 1));
  //     [array[i], array[j]] = [array[j], array[i]];
  //   }
  //   return array;
  // };

  // const allAnswers = shuffle([correctAnswerObject, ...incorrectAnswersObjects]);
  // console.log(allAnswers)
  return (
    <div className="bg-zinc-50 shadow-xl rounded-xl w-[50%] mx-auto p-8">
      <div className="text-right px-4">
        <span>Correct answers: /{currentQuestion}</span>
      </div>
      <header className="text-center px-4 py-16">
        <p
          dangerouslySetInnerHTML={{ __html: question }}
          className="text-3xl font-medium"
        ></p>
      </header>
      <div className="flex flex-col gap-2">
        {allAnswers.map((answer, index) => (
          <Answer key={index} answer={answer}></Answer>
        ))}
      </div>
      <div className="text-right pt-16 px-4">
        <button
          className="bg-amber-600 px-8 py-4 rounded-full text-lg text-amber-50"
          // onClick={() => setCurrentQuestion((prev) => prev + 1)}
        >
          Next question
        </button>
      </div>
    </div>
  );
};

export default Questions;
