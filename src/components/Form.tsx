import { categories } from "../constants";
import { OptionsForm } from "../App";
interface FormTypes {
    generateApiUrl: (options: OptionsForm) => void;
    amountHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
    difficultyHandler: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    selectHandler: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    options: OptionsForm;
  }
  

const Form = ({
  generateApiUrl,
  amountHandler,
  selectHandler,
  difficultyHandler,
  options,
}: FormTypes) => {
  return (
    <div className="bg-zinc-50 p-8 flex gap-4 mx-auto flex-col w-[550px] mb-8 rounded-3xl shadow-lg">
      <h1 className="text-3xl font-bold">Quiz setup</h1>
      <div className="flex flex-col">
        <label htmlFor="questions" className="pb-2 font-medium text-xl">
          Number of questions
        </label>
        <input
        id="questions"
          type="number"
          value={options.amount}
          className="bg-zinc-50 border border-zinc-700 pl-2 p-1"
          onChange={amountHandler}
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
          onChange={difficultyHandler}
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
