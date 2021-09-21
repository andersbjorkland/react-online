import styled from "styled-components";
import SimpleTriangle from "../assets/SimpleTriangle";
import Neon from "../Layout/Neon";
import BareButton from "./BareButton";

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

const pageNumberButton = (number, callback, currentPage = 1, color = "pink") => (
    <BareButton 
        className={number === currentPage ? "active" : false} 
        key={number} 
        callback={() => callback(number)}
    >
        <Neon className={color}>{number}</Neon>
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
        pagesBtn[i] = pageNumberButton(i+1, updateCurrentPage, currentPage, props.color ?? "pink");
    }

    const nextBtn = (
        <BareButton className={currentPage < numberOfPages ? false : "inactive"} callback={() => updateCurrentPage(currentPage + 1)}>
            <IterationIconContainer><Neon active={currentPage < numberOfPages}><SimpleTriangle active={currentPage < numberOfPages} color={props.color ?? "pink"} /></Neon></IterationIconContainer>
        </BareButton>
    );

    const prevBtn = (
        <BareButton 
            className={currentPage > 1 ? false : "inactive"} 
            callback={() => updateCurrentPage(currentPage - 1)}
        >
            <IterationIconContainer className="previous"><Neon active={currentPage > 1}><SimpleTriangle active={currentPage > 1} color={props.color ?? "pink"} /></Neon></IterationIconContainer>
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