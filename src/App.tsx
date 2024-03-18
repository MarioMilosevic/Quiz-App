import { useState, useEffect } from "react";
import Form from "./components/Form";
import Loading from "./Loading";
import { baseUrl } from "./constants";
function App() {
  const [isLoading, setIsLoading] = useState(false);
  // const [options, setOptions] = useState({
  //   amount: 10,
  //   category:"General Knowledge",
  //   difficulty:"Easy"
  // })

  // https://opentdb.com/api.php?amount=10&category=9&difficulty=medium

  const generateApiUrl = async (amount, category, difficulty) => {
    const url = `${baseUrl}amount=${amount}&category=${category}&difficulty=${difficulty}`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      console.log("api request made");
    }
  };

  return (
    <>
      {!isLoading && <Form />}
      {isLoading && <Loading />}
      <button
        className=" border border-black"
        onClick={() => generateApiUrl(10, 23, "easy")}
      >
        Salji rekvest
      </button>
    </>
  );
}

export default App;
