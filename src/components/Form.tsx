import { useState } from "react";
import { videoGames, sports, mythology, generalKnowledge } from "../constants";

const Form = () => {
  const [options, setOptions] = useState({
    amount: "10",
    categoryName: "General Knowledge",
    categoryCode: "15",
    difficulty: "Easy",
  });


  const nemamPojma = () => {
      
    setOptions()
  }

  console.log(options);

  return (
    <div className="bg-zinc-50 p-8 flex gap-4 mx-auto flex-col w-[550px] rounded-3xl shadow-lg">
      <h1 className="text-3xl font-bold">Quiz setup</h1>
      <div className="flex flex-col">
        <label htmlFor="questions" className="pb-2 font-medium text-xl">
          Number of questions
        </label>
        <input
          type="number"
          value={options.amount}
          className="bg-zinc-50 border border-zinc-700 pl-2 p-1"
          onChange={(e) => setOptions({ ...options, amount: e.target.value })}
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="category" className="pb-2 font-medium text-xl">
          Category
        </label>
        <select
          name="category"
          id="category"
          className="bg-zinc-50 py-2 pl-1 border border-zinc-700 "
          value={options.categoryName}
          onChange={(e) => setOptions({ ...options, categoryName: e.target.value })}
        >
          <option value={generalKnowledge.category}>
            {generalKnowledge.name}
          </option>
          <option value={mythology.category}>{mythology.name}</option>
          <option value={videoGames.category}>{videoGames.name}</option>
          <option value={sports.category}>{sports.name}</option>
        </select>
      </div>
      <div className="flex flex-col">
        <label htmlFor="difficulty" className="pb-2 font-medium text-xl">
          Difficulty
        </label>
        <select
          name="difficulty"
          id="difficulty"
          className="bg-zinc-50 py-2 pl-1 border border-zinc-700"
          value={options.difficulty}
          onChange={(e) =>
            setOptions({ ...options, difficulty: e.target.value })
          }
        >
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="Hard">Hard</option>
        </select>
      </div>
      <button className="rounded-full mt-4 px-4 py-2 bg-zinc-600 text-zinc-50 hover:bg-zinc-800">
        Start playing!
      </button>
    </div>
  );
};

export default Form;
