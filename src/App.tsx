function App() {
  return (
    <>
      <div className="border border-black">
        <h1>Quiz setup</h1>
        <label htmlFor="questions">Number of questions</label>
        <input type="number" value="10" />

        <label htmlFor="">Category</label>
        <select name="category" id="category">
          <option value="Mythology">Mythology</option>
          <option value="General Knowledge">General Knowledge</option>
          <option value="Video Games">Video Games</option>
          <option value="Sports">Sports</option>
        </select>
        <label htmlFor="difficulty">Difficulty</label>
        <select name="difficulty" id="difficulty">
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="Hard">Hard</option>
        </select>
      </div>
    </>
  );
}

export default App;
