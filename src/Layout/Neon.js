import { useContext } from "react";
import styled from "styled-components";
import LightsContext from "../Hooks/LightsContext";

const NeonContainer = styled.div`
    color: white;
    display: flex;
    position: relative;
    text-decoration: none;

    > * {
        position: relative;
    }
`;

const Blurred = styled.div`
    filter: blur(4px);
    position: absolute;
`;

const Neon = (props) => {
    const context = useContext(LightsContext);

    return (
        <NeonContainer>
            <div>{props.children}</div>
            {context.neonActivated ? <Blurred>{props.children}</Blurred> : null}
        </NeonContainer>
    );
}

export default Neon;