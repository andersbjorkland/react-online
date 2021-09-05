import { useState } from "react";
import styled from "styled-components";
import Neon from "../Layout/Neon";
import BareButton from "./BareButton";
import triangle from "../assets/triangle.svg";

const Wrapper = styled.div`
    font-weight: lighter;
    display: flex;
    flex-direction: column;
    align-items: center;

    .active {
        font-weight: bold;
    }
`;

const ControlContainer = styled.div`
    width: 12rem;
    display: flex;
    justify-content: space-between;
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

    let startIteration = 0;
    
    if (currentPage > 2) {
        startIteration = currentPage - 3;

        if (currentPage + 2 >= numberOfPages) {
            startIteration = numberOfPages - 5;
        }

    }

    let stopIteration = currentPage + 2 < numberOfPages ? currentPage + 2 : numberOfPages; 

    if (stopIteration < 5) {
        stopIteration = numberOfPages >= 5 ? 5 : numberOfPages;
    }


    for (let i = startIteration; i < stopIteration; i++) {
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
        <Wrapper>
            <ControlContainer>
                    { prevBtn }
                    { pagesBtn }
                    { nextBtn }
            </ControlContainer>
            {props.children}
        </Wrapper>
    );
}

export default Pagination;