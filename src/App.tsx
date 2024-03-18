import { useState } from "react";
import Form, { OptionsForm } from "./components/Form";
import Loading from "./Loading";
import Questions from "./components/Questions";
import { baseUrl } from "./constants";
function App() {

  const [phase,setPhase] = useState("form")
  const [data, setData] = useState(null)

  const generateApiUrl = async (options: OptionsForm) => {
    const { amount, categoryCode, difficulty } = options;
    const url = `${baseUrl}amount=${amount}&category=${categoryCode}&difficulty=${difficulty}`;

    try {
     setPhase("loading") 
     const response = await fetch(url);
     const data = await response.json();
     setData(data)
     setPhase("questions")
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <>
      {phase === "form" && <Form generateApiUrl={generateApiUrl} />}
      {phase === "loading" && <Loading />}
      {phase === "questions" && <Questions data={data}/>}
    </>
  );
}

export default App;
