import styled from "styled-components";

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

const Neon = (props) => (
    <NeonContainer>
        <div>{props.children}</div>
        <Blurred>{props.children}</Blurred>
    </NeonContainer>
);

export default Neon;