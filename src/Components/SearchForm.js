import React, { useContext, useState } from "react";
import {
  Form,
  FormGroup,
  InputGroup,
  Input,
  InputGroupAddon,
  Button,
} from "reactstrap";
import { FaSearch } from "react-icons/fa";
import ResultContext from "../Context/ResultsContext";
import { fetchMoviesData } from "../helpers/api-calls";
import "bootstrap/dist/css/bootstrap.min.css";

const SearchForm = () => {
  const [searchText, setSearchText] = useState("");
  const { setResultObject, setLoading } = useContext(ResultContext);

  const styles = {
    padding: "1em",
    fontSize: "1.4em",
  };

  const searchMovies = async (e) => {
    e.preventDefault();
    const search = searchText.trim();
    if (search.length < 3)
      return alert("Please enter a longerrr search value!");
    setLoading(true);
    const { success, data } = await fetchMoviesData(search);
    if (success) {
      setResultObject(data);
    } else {
      console.error(data);
      alert("Something went wrong! Please try again later", data);
    }
    setLoading(false);
    setSearchText("");
  };

  return (
    <Form onSubmit={searchMovies} className="searchbox">
      <FormGroup>
        <InputGroup>
          <Input
            type="text"
            placeholder="Enter movie or series name..."
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
            value={searchText}
            style={styles}
          />
          <InputGroupAddon addonType="append">
            <Button color="danger" style={{ fontSize: "1.2em" }}>
              <FaSearch />
            </Button>
          </InputGroupAddon>
        </InputGroup>
      </FormGroup>
    </Form>
  );
};

export default SearchForm;
