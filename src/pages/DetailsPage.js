import { useEffect, useState } from "react";
import { Col, Container, Row, Spinner } from "reactstrap";
import imdbLogo from "../imdb-logo.png";
import { fetchMovieDetails } from "../helpers/api-calls";
import {
  useHistory,
  useParams,
} from "react-router-dom/cjs/react-router-dom.min";

const DetailsPage = () => {
  const { imdbId = "" } = useParams();
  const history = useHistory();

  const [movieDetails, setMovieDetails] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchDetails = async (imdbID) => {
    if (imdbID) {
      setLoading(true);
      const { success, data } = await fetchMovieDetails(imdbID);
      if (success) setMovieDetails(data);
      else {
        console.error(data);
        alert("Something went wrong, Please try again later!");
      }
      setLoading(false);
    }
  };

  useEffect(() => {
    if (imdbId) {
      fetchDetails(imdbId);
    }
  }, [imdbId]);

  if (!imdbId) return history.push("/");

  return (
    <Container className="movieDetails">
      {loading && <Spinner color="danger" style={{ margin: "10% 0" }} />}
      {movieDetails && (
        <Row>
          <Col md="6">
            <img src={movieDetails.Poster} width="400" alt="poster" />
          </Col>
          <Col md="6" className="detailsCard">
            <h1>{movieDetails.Title}</h1>
            <p style={{ color: "#f3ce13" }}>{movieDetails.Year}</p>
            <div>
              <img src={imdbLogo} width="66" alt="imdb-logo" />
              <span>{" " + movieDetails.imdbRating}</span>
            </div>
            <p style={{ margin: "0.8em 0 0 0" }}>
              <span style={{ color: "#f3ce13" }}>Genre:&nbsp;</span>
              {movieDetails.Genre}{" "}
            </p>
            <p style={{ margin: "0.8em 0 0 0" }}>
              <span style={{ color: "#f3ce13" }}>Director:&nbsp;</span>
              {movieDetails.Director}{" "}
            </p>
            <p style={{ margin: "0.8em 0 0 0" }}>
              <span style={{ color: "#f3ce13" }}>Actors:&nbsp;</span>
              {movieDetails.Actors}{" "}
            </p>
            <p style={{ margin: "0.8em 0 0 0" }}>
              <span style={{ color: "#f3ce13" }}>Plot:&nbsp;</span>
              {movieDetails.Plot}{" "}
            </p>
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default DetailsPage;
