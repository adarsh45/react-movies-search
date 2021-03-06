import { Container } from "reactstrap";
import SearchForm from "../Components/SearchForm";
import ResultPage from "../Components/ResultPage";

const Home = () => {
  return (
    <Container fluid style={{ marginTop: "3.2em" }}>
      <h2 style={{ color: "white", textAlign: "center", padding: "0.6em 0" }}>
        Search your movie or series
      </h2>
      <SearchForm />
      <ResultPage />
    </Container>
  );
};

export default Home;
