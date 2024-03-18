import Answer from "./Answer";
import { useState } from "react";
interface QuestionsType {
  data: null;
}

const Questions = ({ data }: QuestionsType) => {
    const [currentQuestion, setCurrentQuestion] = useState(0)
    const {results} = data
    const question = results[currentQuestion]
    const {correct_answer, incorrect_answers} = question
    const correctAnswerObject = {value:correct_answer, isCorrect:true, id:crypto.randomUUID()}
    const incorrectAnswersObjects = incorrect_answers.map(answer => ({value:answer, isCorrect:false, id:crypto.
    randomUUID()}))
    const allAnswers = [correctAnswerObject, ...incorrectAnswersObjects]
  
    return (
    <div className="bg-zinc-50 shadow-xl rounded-xl w-[50%] mx-auto p-8">
      <div className="text-right px-4">
        <span>Correct answers: 0/1</span>
      </div>
      <header className="text-center px-4 py-16">
        <h1 className="text-3xl font-medium">
          {question.question}
        </h1>
      </header>
      <div className="flex flex-col gap-2">
        {allAnswers.map(answer =>  <Answer key={answer.id}>{answer.value}</Answer>)}
      </div>
      <div className="text-right pt-16 px-4">
        <button className="bg-amber-600 px-8 py-4 rounded-full text-lg text-amber-50">
          Next question
        </button>
      </div>
    </div>
  );
};

export default Questions;
