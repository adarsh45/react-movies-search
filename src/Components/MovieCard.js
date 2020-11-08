import React from "react";
import { Button, Card, CardBody, CardImg, CardText, CardTitle } from "reactstrap";
import { FaTv} from "react-icons/fa";
import { MdMovie } from "react-icons/md";
import { SiImdb } from "react-icons/si";
import errorImg from '../error_img.png';

const MovieCard = ({movieObject})=>{

    const styles = {
        border: "none",
        padding: "0",
    }

    return (
        <Card className="box" style={styles}>
            <CardImg top src={movieObject.Poster} onError={e=>{e.target.src=errorImg}} alt="movie poster" />
            <CardBody>
                <CardTitle tag="h5"> {movieObject.Title} </CardTitle>
                <CardText> <SiImdb/> Release: {movieObject.Year} </CardText>
                <Button color="success"> {movieObject.Type === "movie" ? <MdMovie /> : <FaTv /> } {movieObject.Type} </Button>
            </CardBody>
        </Card>
    );
}

export default MovieCard;