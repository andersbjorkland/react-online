import styled from "styled-components";

const Image = styled.img`
    width: auto;
    height: auto;
    max-width: 100%;

    &.slim {
        max-height: 15rem;
    }
`;

export default Image;