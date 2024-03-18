
const Questions = () => {
  return (
    <div className="border border-black w-[50%] mx-auto p-4">
      <div className="text-right">
        <span>Correct answers: 0/1</span>
      </div>
      <header className="border border-black text-center pb-8">
        <h1 className="text-3xl font-medium">What is the name of Manchester United's home stadium ? </h1>
      </header>
      <div className="border border-black">
        <p className="border">Anfield</p>
        <p className="border">Old Trafford</p>
        <p className="border">City of Manchester Stadium</p>
        <p className="border">St James Park</p>
      </div>
    </div>
  );
};

export default Questions;
