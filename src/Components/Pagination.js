import { useState } from "react";
import styled from "styled-components";
import FlexContainer from "../Layout/FlexContainer";
import Neon from "../Layout/Neon";
import BareButton from "./BareButton";

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

const Pagination = ({numberOfPages , ...props}) => {

    const [currentPage, setCurrentPage] = useState(1);

    const pagesBtn = [];

    for (let i = 0; i < numberOfPages; i++) {
        pagesBtn[i] = pageNumberButton(i+1, setCurrentPage, currentPage);
    }
    
    return (
        <Container>
            <FlexContainer>
                { pagesBtn }
            </FlexContainer>
            {props.children}
        </Container>
    );
}

export default Pagination;