import { forwardRef, useState } from "react";
import { useEffect } from "react/cjs/react.development";
import styled from "styled-components";
import BareButton from "../Components/BareButton";
import Card from "../Components/Card";
import HeadingContainer from "../Components/HeadingContainer";
import Pagination from "../Components/Pagination";
import ColumnContainer from "../Layout/ColumnContainer";
import FlexContainer from "../Layout/FlexContainer";
import Neon from "../Layout/Neon";
import { RefSection } from "../Layout/Section";
import { categories, featured, design } from "../dev/data/showcases";


const Container = styled.div`
    font-weight: lighter;
`;

const Showcases = forwardRef((props, ref) => {

    const [page, setPage] = useState(1);
    const [results, setResults] = useState(featured);
    const [card, setCard] = useState(<Card content={featured[page-1]} />);
    const [currentCategory, setCurrentCategory] = useState(categories[0]);

    const categoryElements = categories.map(category => {
        return (
        <BareButton 
            key={category} 
            className={category === currentCategory ? "active" : false}
            callback={() => {
                    setCurrentCategory(category);
                    setPage(1);
                }
            }
        >
            <Neon>{category}</Neon>
        </BareButton>)
    });

    useEffect( () => {
        switch (currentCategory) {
            case "design":
                setResults(design);
                break;

            default:
                setResults(featured);
                break;
        }
    }, [currentCategory])

    useEffect( () => {
        setCard(<Card content={results[page-1]} />);
    }, [page, results]);
    
    
    return (
        <RefSection id="showcases" ref={ref}>
            <Container>
                <HeadingContainer>
                    <h2>showcases</h2>
                </HeadingContainer>
                <ColumnContainer>
                    <FlexContainer className="mt-2 pink">
                        {categoryElements}
                    </FlexContainer>
                    <FlexContainer className="mt-2">
                        <ColumnContainer>
                            <Pagination numberOfPages={results.length} setPage={setPage} currentPage={page} color="pink">
                                {card}
                            </Pagination>
                        </ColumnContainer>
                    </FlexContainer>
                </ColumnContainer>
            </Container>
        </RefSection>
    );
});

export default Showcases;