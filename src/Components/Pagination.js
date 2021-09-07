import { motion } from "framer-motion";
import styled from "styled-components";
import Neon from "../Layout/Neon";
import BareButton from "./BareButton";
// import triangle from "../assets/triangle.svg";

const triangle = (active) => (
    <svg 
        width="13" 
        height="15" 
        viewBox="0 0 13 15" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
    >
 
        <motion.path 
            d="M0.749998 1.00481L12 7.5L0.749997 13.9952L0.749998 1.00481Z" 
            stroke="white"
            animate={{
                stroke: active ? "#FECDFC": "#2E2E2E",
                transition: {duration: 0.3}
            }}
        />
    </svg>
);

const Wrapper = styled.div`
    font-weight: lighter;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const ControlContainer = styled.div`
    width: 12rem;
    display: flex;
    justify-content: space-between;
    margin-bottom: 1rem;
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

const IterationIconContainer = styled.div`

    position: relative;
    bottom: -0.1rem;

    &.previous {
        transform: scaleX(-1);
    }
`;

const Pagination = ({numberOfPages, setPage, currentPage, ...props}) => {

    const updateCurrentPage = (number) => {
        if (number >= 1 && number <= numberOfPages) {
            setPage(number);
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
        <BareButton className={currentPage < numberOfPages ? false : "inactive"} callback={() => updateCurrentPage(currentPage + 1)}>
            <IterationIconContainer><Neon active={currentPage < numberOfPages}>{triangle(currentPage < numberOfPages)}</Neon></IterationIconContainer>
        </BareButton>
    );

    const prevBtn = (
        <BareButton 
            className={currentPage > 1 ? false : "inactive"} 
            callback={() => updateCurrentPage(currentPage - 1)}
        >
            <IterationIconContainer className="previous"><Neon active={currentPage > 1}>{triangle(currentPage > 1)}</Neon></IterationIconContainer>
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