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

  const generateApiUrl = async (options) => {
    const { amount, categoryCode, difficulty } = options;
    const url = `${baseUrl}amount=${amount}&category=${categoryCode}&difficulty=${difficulty}`;

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
      {!isLoading && <Form generateApiUrl={generateApiUrl} />}
      {isLoading && <Loading />}
    </>
  );
}

export default App;
