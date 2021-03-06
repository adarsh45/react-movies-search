import React, { useState } from "react";
import { Container } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import SearchForm from "./Components/SearchForm";
import ResultContext from "./Context/ResultsContext";
import ResultPage from "./Components/ResultPage";

function App() {
  const [loading, setLoading] = useState(false);
  const [resultObject, setResultObject] = useState({});

  return (
    <ResultContext.Provider
      value={{
        resultObject,
        setResultObject,
        loading,
        setLoading,
      }}
    >
      <Container fluid>
        <h2 style={{ color: "white", textAlign: "center", padding: "0.6em 0" }}>
          Search your movie or series
        </h2>
        <SearchForm />
        <ResultPage />
      </Container>
    </ResultContext.Provider>
  );
}

export default App;
