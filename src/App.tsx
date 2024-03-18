import { useState } from "react";
import Form, {OptionsForm} from "./components/Form";
import Loading from "./Loading";
import Questions from "./components/Questions";
import { baseUrl } from "./constants";
function App() {
  const [isLoading, setIsLoading] = useState(false);



  const generateApiUrl = async (options:OptionsForm) => {
    const { amount, categoryCode, difficulty } = options;
    const url = `${baseUrl}amount=${amount}&category=${categoryCode}&difficulty=${difficulty}`;

    try {
      setIsLoading(true)
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      setIsLoading(false)
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      console.log("api request made");
    }
  };

  return (
    <>
      {isLoading && <Form generateApiUrl={generateApiUrl} />}
      {isLoading && <Loading />}
      <Questions/>
    </>
  );
}

export default App;
