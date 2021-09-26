import { faLightbulb } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import LightsContext from "../Hooks/LightsContext";
import TogglerButton from "./TogglerButton";

const LightToggler = () => {

    const context = useContext(LightsContext);

    return (
        <LightsContext.Consumer>
            {({toggleLight}) => (
                <TogglerButton callback={toggleLight} toggleState={!context.neonActivated}>
                    <FontAwesomeIcon className={context.neonActivated ? "white08" : "dark"} icon={faLightbulb} />
                </TogglerButton>
            )}
        </LightsContext.Consumer>
    );
}

export default LightToggler;