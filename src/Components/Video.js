import styled from "styled-components";

const Video = styled.video`
    width: auto;
    height: auto;
    max-width: 100%;

    &.slim {
        max-height: 15rem;
    }
`;

export default Video;