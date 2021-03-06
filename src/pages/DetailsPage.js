import { useContext, useEffect, useState } from "react";
import ResultContext from "../Context/ResultsContext";
import Axios from "axios";
import { Col, Container, Row, Spinner } from "reactstrap";
import imdbLogo from "../imdb-logo.png";

const API_URL = "https://www.omdbapi.com/?apikey=";
const API_KEY = "852159f0";

const DetailsPage = () => {
  const { imdbId } = useContext(ResultContext);
  const [detailsObject, setDetailsObject] = useState(null);

  const fetchDetails = async () => {
    if (imdbId) {
      // generating API url
      let url = `${API_URL}${API_KEY}&i=${imdbId}`;
      //   making a request & storing response
      const { status, data } = await Axios.get(url);
      if (status === 200 && data.Response === "True") {
        setDetailsObject(data);
      } else {
        console.log("got no response!");
      }
    }
  };

  useEffect(() => {
    fetchDetails();
  }, imdbId);

  return (
    <>
      {detailsObject ? (
        <Container className="movieDetails">
          <Row md>
            <Col md="6">
              <img src={detailsObject.Poster} width="400" alt="poster" />
            </Col>
            <Col md="6" className="detailsCard">
              <h1> {detailsObject.Title} </h1>
              <p style={{ color: "#f3ce13" }}> {detailsObject.Year} </p>
              <div>
                <img src={imdbLogo} width="66" alt="imdb-logo" />
                <span>{" " + detailsObject.imdbRating}</span>
              </div>
              <p style={{ margin: "0.8em 0 0 0" }}>
                <span style={{ color: "#f3ce13" }}>Genre:</span>{" "}
                {detailsObject.Genre}{" "}
              </p>
              <p style={{ margin: "0.8em 0 0 0" }}>
                <span style={{ color: "#f3ce13" }}>Director:</span>{" "}
                {detailsObject.Director}{" "}
              </p>
              <p style={{ margin: "0.8em 0 0 0" }}>
                <span style={{ color: "#f3ce13" }}>Actors:</span>{" "}
                {detailsObject.Actors}{" "}
              </p>
              <p style={{ margin: "0.8em 0 0 0" }}>
                <div style={{ color: "#f3ce13" }}>Plot:</div>{" "}
                {detailsObject.Plot}{" "}
              </p>
            </Col>
          </Row>
        </Container>
      ) : (
        <Spinner color="danger" style={{ margin: "10% 0" }} />
      )}
    </>
  );
};

export default DetailsPage;
