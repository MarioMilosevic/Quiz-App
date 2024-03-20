interface AnswerType {
  answer: string;
  checkAnswer: (e: React.MouseEvent<HTMLParagraphElement, MouseEvent>) => void;
}

const Answer = ({ answer, checkAnswer }: AnswerType) => {
  return (
    <p
      dangerouslySetInnerHTML={{ __html: answer }}
      className="text-center py-2 text-xl w-[60%] mx-auto bg-zinc-700 text-zinc-50 cursor-pointer hover:bg-zinc-800"
      onClick={checkAnswer}
    ></p>
  );
};

export default Answer;
