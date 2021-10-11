import React from "react";
import { articleContext } from "../configuration/context";

const ArticleContext = React.createContext({...articleContext});

export default ArticleContext;