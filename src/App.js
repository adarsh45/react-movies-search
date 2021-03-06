import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import ResultContext from "./Context/ResultsContext";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import DetailsPage from "./pages/DetailsPage";

function App() {
  const [loading, setLoading] = useState(false);
  const [resultObject, setResultObject] = useState({});
  const [imdbId, setImdbId] = useState("");

  return (
    <ResultContext.Provider
      value={{
        resultObject,
        setResultObject,
        loading,
        setLoading,
        imdbId,
        setImdbId,
      }}
    >
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/details" exact component={DetailsPage} />
        </Switch>
      </BrowserRouter>
    </ResultContext.Provider>
  );
}

export default App;
