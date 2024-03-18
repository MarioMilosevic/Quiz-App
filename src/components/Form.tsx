import { useState } from "react";
import { categories } from "../constants";

const Form = ({ generateApiUrl }) => {
  const [options, setOptions] = useState({
    amount: "10",
    categoryName: "General Knowledge",
    categoryCode: "9",
    difficulty: "easy",
  });

  const selectHandler = (e) => {
    const selectedCategory = categories.find(
      (category) => category.categoryCode === e.target.value
    );
    console.log(selectedCategory)
    setOptions({
      ...options,
      categoryName: selectedCategory?.categoryName,
      categoryCode: selectedCategory?.categoryCode,
    });
  };

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
          onChange={selectHandler}
        >
          {categories.map((category) => (
            <option key={category.id} value={category.categoryCode}>
              {category.categoryName}
            </option>
          ))}
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
          <option value="hard">Hard</option>
        </select>
      </div>
      <button
        className="rounded-full mt-4 px-4 py-2 bg-zinc-600 text-zinc-50 hover:bg-zinc-800"
        onClick={() => generateApiUrl(options)}
      >
        Start playing!
      </button>
    </div>
  );
};

export default Form;
