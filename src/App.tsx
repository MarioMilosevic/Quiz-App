import { useState } from "react";
import Form from "./components/Form";
import Loading from "./Loading";
import Questions from "./components/Questions";
import { baseUrl, categories } from "./constants";

export interface OptionsForm {
  amount: string;
  categoryName: string | undefined;
  categoryCode: string | undefined;
  difficulty: string;
}

function App() {
  const [phase, setPhase] = useState("form");
  const [responseData, setResponseData] = useState(null);
  const [options, setOptions] = useState<OptionsForm>({
    amount: "10",
    categoryName: "General Knowledge",
    categoryCode: "9",
    difficulty: "easy",
  });

  const amountHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setOptions({ ...options, amount: e.target.value });
  };

  const difficultyHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setOptions({ ...options, difficulty: e.target.value });
  };

  const selectHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedCategory = categories.find(
      (category) => category.categoryCode === e.target.value
    );
    setOptions({
      ...options,
      categoryName: selectedCategory?.categoryName,
      categoryCode: selectedCategory?.categoryCode,
    });
  };

  const generateApiUrl = async (options: OptionsForm) => {
    const { amount, categoryCode, difficulty } = options;
    const url = `${baseUrl}amount=${amount}&category=${categoryCode}&difficulty=${difficulty}`;
    try {
      setPhase("loading");
      const response = await fetch(url);
      const data = await response.json();
      setResponseData(data);
      setPhase("questions");
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const resetGame = () => {
    setOptions({
      amount: "10",
      categoryName: "General Knowledge",
      categoryCode: "9",
      difficulty: "easy",
    });
    setPhase("form");
  };

  return (
    <>
      {phase === "form" && (
        <Form
          options={options}
          generateApiUrl={generateApiUrl}
          amountHandler={amountHandler}
          selectHandler={selectHandler}
          difficultyHandler={difficultyHandler}
        />
      )}
      {phase === "loading" && <Loading />}
      {phase === "questions" && (
        <Questions
          responseData={responseData}
          options={options}
          resetGame={resetGame}
        />
      )}
    </>
  );
}

export default App;
