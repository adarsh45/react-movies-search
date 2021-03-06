import React, { useContext } from "react";
import { Spinner } from "reactstrap";
import ResultContext from "../Context/ResultsContext";
import MovieCard from "./MovieCard";

const ResultPage = () => {
  const { resultObject, loading } = useContext(ResultContext);

  const countProperties = (obj) => {
    var count = 0;
    for (var prop in obj) {
      if (obj.hasOwnProperty(prop)) ++count;
    }
    return count;
  };

  console.log(resultObject);

  return (
    <div>
      {loading ? (
        <Spinner color="danger" />
      ) : (
        <>
          <p style={{ color: "white" }}>
            Total results: {countProperties(resultObject)}{" "}
          </p>
          <div className="grid">
            {Object.keys(resultObject).map((value) => (
              <MovieCard key={value} movieObject={resultObject[value]} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default ResultPage;
