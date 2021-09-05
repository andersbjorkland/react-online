import { useState } from "react";
import styled from "styled-components";
import FlexContainer from "../Layout/FlexContainer";
import Neon from "../Layout/Neon";
import BareButton from "./BareButton";
import triangle from "../assets/triangle.svg";

const Container = styled.div`
    font-weight: lighter;

    .active {
        font-weight: bold;
    }
`;

const pageNumberButton = (number, callback, currentPage = 1) => (
    <BareButton 
        className={number === currentPage ? "active" : false} 
        key={number} 
        callback={() => callback(number)}
    >
        <Neon className="pink">{number}</Neon>
    </BareButton>
);

const StyledIterationIcon = styled.img`

    position: relative;
    bottom: -0.1rem;

    &.previous {
        transform: scaleX(-1);
    }
`;

const Pagination = ({numberOfPages , ...props}) => {

    const [currentPage, setCurrentPage] = useState(1);

    const updateCurrentPage = (number) => {
        if (number >= 1 && number <= numberOfPages) {
            setCurrentPage(number);
        }
    }

    const pagesBtn = [];

    for (let i = 0; i < numberOfPages; i++) {
        pagesBtn[i] = pageNumberButton(i+1, updateCurrentPage, currentPage);
    }

    const nextBtn = (
        <BareButton callback={() => updateCurrentPage(currentPage + 1)}>
            <Neon className="pink"><StyledIterationIcon src={triangle} alt="" /></Neon>
        </BareButton>
    );

    const prevBtn = (
        <BareButton callback={() => updateCurrentPage(currentPage - 1)}>
            <Neon className="pink"><StyledIterationIcon className="previous" src={triangle} alt="" /></Neon>
        </BareButton>
    );
    
    return (
        <Container>
            <FlexContainer>
                { prevBtn }
                { pagesBtn }
                { nextBtn }
            </FlexContainer>
            {props.children}
        </Container>
    );
}

export default Pagination;