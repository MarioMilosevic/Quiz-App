import { useState, useEffect } from "react";
import Form from "./components/Form";
import Loading from "./Loading";
import { baseUrl } from "./contsants";
function App() {
  const [isLoading, setIsLoading] = useState(false);

  // https://opentdb.com/api.php?amount=10&category=9&difficulty=medium

  const generateApiUrl = (amount, category,difficulty) => {
    const url = `${baseUrl}amount=${amount}&category=${category}&difficulty=${difficulty}`
    console.log(url)
  }

  return (
    <>
      {!isLoading && <Form />}
      {isLoading && <Loading />}
      <button className=" border border-black">Salji rekvest</button>
    </>
  );
}

export default App;
