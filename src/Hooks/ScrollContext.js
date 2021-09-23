import React from "react";
import { scrollContext } from "../configuration/context";

const ScrollContext = React.createContext({...scrollContext});

export default ScrollContext;