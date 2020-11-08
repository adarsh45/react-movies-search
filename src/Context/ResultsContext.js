import { createContext } from "react";

const ResultContext = createContext({resultObject: {}, updateResult: ()=>{}});

export default ResultContext;