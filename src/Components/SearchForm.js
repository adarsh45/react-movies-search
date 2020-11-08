import React, { useContext, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, FormGroup, InputGroup, Input, InputGroupAddon, Button } from "reactstrap";
import { FaSearch } from "react-icons/fa";

import Axios from 'axios';
import ResultContext from "../Context/ResultsContext";

const API_URL = "http://www.omdbapi.com/?apikey=";
const API_KEY = "852159f0";

const SearchForm = ()=>{
    const [searchText, setSearchText] = useState("");
    const {updateResult} = useContext(ResultContext);

    const styles = {
        padding: "1em",
        fontSize: "1.4em"
    }
    
    const submitMovieText = (e)=> {
        e.preventDefault();
        if (searchText === "") {
            return alert("Please enter a movie name first!");
        }
        const searchUrl = `${API_URL}${API_KEY}&s=${searchText}`;
        fetchResults(searchUrl);
        // console.log(searchText);
        setSearchText("");
    }

    const fetchResults = async (searchUrl)=>{
        let {data, status} = await Axios.get(searchUrl);
        if (status === 200 && data.Response === "True") {
            // console.log(data);
            // const ar = data?.Search;
            // console.log(ar);
            // console.log(typeof ar);
            updateResult(data?.Search);
        } else {
            console.log("Something went wrong while getting response");
            alert("Something went wrong while fetching results!");
        }
    }

    return (
        <Form onSubmit={e=>{submitMovieText(e)}}>
            <FormGroup>
                <InputGroup>
                    <Input 
                        type="text"
                        placeholder="Enter movie or series name..."
                        onChange={e=>{setSearchText(e.target.value)}}
                        value={searchText}
                        style={styles}
                    />
                    <InputGroupAddon addonType="append">
                        <Button color="danger" style={{fontSize: "1.2em"}}><FaSearch/></Button>
                    </InputGroupAddon>
                </InputGroup>
            </FormGroup>
        </Form>
    );
}

export default SearchForm;