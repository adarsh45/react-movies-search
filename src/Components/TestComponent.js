import React, { useContext } from "react";
import ResultContext from "../Context/ResultsContext";

const TestComponent = ()=> {
    const {resultObject} = useContext(ResultContext);
    let resultKeys = Object.keys(resultObject);

    // console.log();

    return (
        <div>
            {resultKeys}
        </div>
    );
}

export default TestComponent;