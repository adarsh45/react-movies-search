import React, { useState } from "react";
import { Container } from "reactstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import SearchForm from "./Components/SearchForm";
import ResultContext from "./Context/ResultsContext";
import ResultPage from "./Components/ResultPage";

function App() {
  
  const [resultObject, setResultObject] = useState({});
  const updateResult = (fetchedSearchObject)=>{
    // if (fetchedSearchObject) {
      setResultObject(fetchedSearchObject);
    // } else {
    //   console.log("Provided array is empty!");
    // }
  }

  return (

  <ResultContext.Provider value={{
    resultObject, updateResult
  }}>
    <Container>
      <h2 style={{color: "white", textAlign: "center", padding:"0.6em 0"}}>Seach your movie or series</h2>
      <SearchForm />
      <ResultPage />
    </Container>
  </ResultContext.Provider>

    
  );
}

export default App;
