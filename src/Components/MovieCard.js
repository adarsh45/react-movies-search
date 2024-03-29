import {
  Button,
  Card,
  CardBody,
  CardImg,
  CardText,
  CardTitle,
} from "reactstrap";
import { FaTv } from "react-icons/fa";
import { MdMovie } from "react-icons/md";
import { SiImdb } from "react-icons/si";
import errorImg from "../error_img.png";
import { useHistory } from "react-router-dom";

const MovieCard = ({ movieObject }) => {
  const history = useHistory();

  const styles = {
    border: "none",
    padding: "0",
  };

  const seeDetails = () => {
    history.push(`/details/${movieObject.imdbID}`);
  };

  return (
    <Card className="box" style={styles} onClick={seeDetails}>
      <CardImg
        top
        src={movieObject.Poster}
        onError={(e) => {
          e.target.src = errorImg;
        }}
        alt="movie poster"
      />
      <CardBody>
        <CardTitle tag="h5"> {movieObject.Title} </CardTitle>
        <CardText>
          {" "}
          <SiImdb /> Release: {movieObject.Year}{" "}
        </CardText>
        <Button color="success">
          {" "}
          {movieObject.Type === "movie" ? <MdMovie /> : <FaTv />}{" "}
          {movieObject.Type}{" "}
        </Button>
      </CardBody>
    </Card>
  );
};

export default MovieCard;
