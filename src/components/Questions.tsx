import Answer from "./Answer";
const Questions = () => {
  return (
    <div className="bg-zinc-50 shadow-xl rounded-xl w-[50%] mx-auto p-8">
      <div className="text-right">
        <span>Correct answers: 0/1</span>
      </div>
      <header className="text-center py-16">
        <h1 className="text-3xl font-medium">What is the name of Manchester United's home stadium ? </h1>
      </header>
      <div className="flex flex-col gap-1">
        <Answer>Anfield</Answer>
        <Answer>Old Trafford</Answer>
        <Answer>City of Manchester Stadium</Answer>
        <Answer>St James Park</Answer>
      </div>
    </div>
  );
};

export default Questions;
