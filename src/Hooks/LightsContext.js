import React from "react";
import { lightsContext } from "../configuration/context";

const LightsContext = React.createContext({...lightsContext});

export default LightsContext;