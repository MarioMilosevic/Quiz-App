import Answer from "./Answer";
import { useState, useEffect } from "react";

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
const Questions = ({ responseData }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [score, setScore] = useState(0)
  const [data, setData] = useState({
    questionData: "",
    correctAnswer: "",
    incorrectAnswers: [],
  });
  useEffect(() => {
    if (responseData) {
      const { results } = responseData;
      const questionObject = results[currentQuestion];
      const { question, correct_answer, incorrect_answers } = questionObject;
      console.log('radi')
      setData({
        questionData:question,
        correctAnswer: correct_answer,
        incorrectAnswers: incorrect_answers,
      });
    }
  }, [responseData, currentQuestion]);


  function shuffleAnswers(correctAnswer, incorrectAnswers) {
    const allAnswers = [correctAnswer, ...incorrectAnswers];
    const randomIndex = Math.floor(Math.random() * allAnswers.length);
    [allAnswers[0], allAnswers[randomIndex]] = [allAnswers[randomIndex], allAnswers[0]];
    return allAnswers;
  }
  const allAnswers = shuffleAnswers(data.correctAnswer, data.incorrectAnswers)

  const checkAnswer = (e) => {
    if(currentQuestion < 10){
      const selectedAnwer = e.target.getAttribute('data-answer')
      if(selectedAnwer === data.correctAnswer) {
        setScore(prev => prev + 1)
      } setCurrentQuestion(prev => prev + 1)
    } else return
  }


  return (
    <div className="bg-zinc-50 shadow-xl rounded-xl w-[50%] mx-auto p-8">
      <div className="text-right px-4">
        <span>Correct answers: {score}/{currentQuestion}</span>
      </div>
      <header className="text-center px-4 py-16">
        <p
          dangerouslySetInnerHTML={{ __html: data.questionData }}
          className="text-3xl font-medium"
        ></p>
      </header>
      <div className="flex flex-col gap-2">
        {allAnswers.map((answer, index) => (
          <Answer key={index} answer={answer} checkAnswer={checkAnswer}></Answer>
        ))}
      </div>
      <div className="text-right pt-16 px-4">
        <button
          className="bg-amber-600 px-8 py-4 rounded-full text-lg text-amber-50"
          onClick={() => setCurrentQuestion(prev => prev + 1)}
        >
          Next question
        </button>
      </div>
    </div>
  );
};

export default Questions;
