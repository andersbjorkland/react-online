import { motion } from "framer-motion";
import styled from "styled-components";
import timedClickHandler from "../utilities/timedClickHandler";

const StyledButton = styled(motion.button)`
    background: none;
    border: none;
    font-weight: inherit;
    font-family: 'Roboto', sans-serif;
    color: inherit;
    letter-spacing: 0.25rem;

    &.active {
        font-weight: bold;
    }
`;

const BareButton = ({callback, ...props}) => (
    <StyledButton className={props.className ?? false} onClick={() => timedClickHandler(callback)}>
        {props.children}
    </StyledButton>
);

export default BareButton;