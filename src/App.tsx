function App() {
  return (
    <>
      <div className="bg-zinc-50 p-8 flex gap-4 mx-auto flex-col w-[550px] rounded-3xl shadow-lg">
        <h1 className="text-3xl font-bold">Quiz setup</h1>
        <div className="flex flex-col">
          <label htmlFor="questions">Number of questions</label>
          <input
            type="number"
            defaultValue="10"
            className="border border-zinc-700 pl-2 p-1"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="">Category</label>
          <select
            name="category"
            id="category"
            className="py-2 pl-1 border border-zinc-700"
          >
            <option value="Mythology">Mythology</option>
            <option value="General Knowledge">General Knowledge</option>
            <option value="Video Games">Video Games</option>
            <option value="Sports">Sports</option>
          </select>
        </div>
        <div className="flex flex-col">
          <label htmlFor="difficulty">Difficulty</label>
          <select
            name="difficulty"
            id="difficulty"
            className="py-2 pl-1 border border-zinc-700"
          >
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="Hard">Hard</option>
          </select>
        </div>
        <button className="rounded-full mt-8 px-4 py-2 bg-zinc-600 text-zinc-50 hover:bg-zinc-800">
          Start playing!
        </button>
      </div>
    </>
  );
}

export default App;
