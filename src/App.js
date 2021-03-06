import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./App.css";
import ResultContext from "./Context/ResultsContext";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import DetailsPage from "./pages/DetailsPage";
import NavigationBar from "./Components/NavigationBar";

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
        <NavigationBar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/details" exact component={DetailsPage} />
        </Switch>
      </BrowserRouter>
    </ResultContext.Provider>
  );
}

export default App;
