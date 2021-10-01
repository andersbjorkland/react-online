import React from "react";
import { resizeContext } from "../configuration/context";

const ResizeContext = React.createContext({...resizeContext});

export default ResizeContext;