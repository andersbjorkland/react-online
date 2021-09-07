import { useContext } from "react";
import styled from "styled-components";
import LightsContext from "../Hooks/LightsContext";
import { motion } from "framer-motion";

const NeonContainer = styled.div`
    display: flex;
    position: relative;
    text-decoration: none;
    

    > * {
        position: relative;
    }

`;

const Blurred = styled(motion.div)`
    filter: blur(4px);
    opacity: 1;
    position: absolute;
`;

const Neon = ({active = true, ...props}) => {
    const context = useContext(LightsContext);

    return (
        <NeonContainer className={props.className ?? false}>
            <div>{props.children}</div>
            {context.neonActivated && active  ? <Blurred>{props.children}</Blurred> : <Blurred animate={{ filter: "blur(8px)", opacity: 0}}>{props.children}</Blurred>}
        </NeonContainer>
    );
}

export default Neon;