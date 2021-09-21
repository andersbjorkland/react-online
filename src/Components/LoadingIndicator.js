import { motion } from "framer-motion";
import styled from "styled-components";

const Container = styled(motion.div)`
    position: relative;
`;

const Indicator = styled(motion.div)`
    width: 1rem;
    height: 1rem;
    border: var(--lightPink) solid 1px;

    position: relative;
`;

const LoadingIndicator = (props) => {

    return (
        <Container className={props.className ?? false}>
            <Indicator
                animate={{
                    x: [0, -10, -20, -30, -40, -30, -20, -10, 0],
                    rotate: [0, -90, -180, -270, -360, -270, -180, -90, 0]
                }}
                transition={{
                    duration: 4,
                    times: [0, 0.2, 0.3, 0.4, 0.5, 0.6, 0.75, 0.9, 1],
                    repeat: Infinity
                }}
            />
        </Container>
    );
}

export default LoadingIndicator;