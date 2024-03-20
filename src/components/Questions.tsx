import Answer from "./Answer";
import Modal from "./Modal";
import { useState } from "react";

// interface Question {
//   type: string;
//   difficulty: string;
//   category: string;
//   question: string;
//   correct_answer: string;
//   incorrect_answers: string[];
// }

// interface QuestionsType {
//   // response_code:number;
//   data: { results: Question[] };
// }
const Questions = ({ responseData, options, resetGame }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [isModalActive, setIsModalActive] = useState(false);
  const amount = options.amount;

  const { results } = responseData;
  const questionObject = results[currentQuestion];
  const { question, correct_answer, incorrect_answers } = questionObject;
  const data = {
    questionData: question,
    correctAnswer: correct_answer,
    incorrectAnswers: incorrect_answers,
  };

  const randomIndex = Math.floor(Math.random() * incorrect_answers.length + 1);
  const allAnswers = [...incorrect_answers];
  allAnswers.splice(randomIndex, 0, correct_answer);

  const checkAnswer = (answer: string) => {
    if (currentQuestion + 1 < amount) {
      setCurrentQuestion((prev) => prev + 1);
      if (answer === data.correctAnswer) {
        setScore((prev) => prev + 1);
      }
    } else {
      setIsModalActive(true);
    }
  };

  return (
    <div className="bg-zinc-50 shadow-xl rounded-xl w-[50%] mx-auto p-8">
      <div className="text-right px-4">
        <span>
          Correct answers: {score}/{currentQuestion}
        </span>
      </div>
      <header className="text-center px-4 py-16">
        <p
          dangerouslySetInnerHTML={{ __html: data.questionData }}
          className="text-3xl font-medium"
        ></p>
      </header>
      <div className="flex flex-col gap-2">
        {allAnswers.map((answer, index) => (
          <Answer
            key={index}
            answer={answer}
            checkAnswer={checkAnswer}
          ></Answer>
        ))}
      </div>
      <div className="text-right pt-16 px-4">
        <button
          className="bg-amber-600 px-8 py-4 rounded-full text-lg text-amber-50"
          onClick={() => setCurrentQuestion((prev) => prev + 1)}
        >
          Next question
        </button>
        {isModalActive && (
          <Modal score={score} amount={amount} resetGame={resetGame} />
        )}
      </div>
    </div>
  );
};

export default Questions;
