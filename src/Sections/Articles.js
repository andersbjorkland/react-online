import { useState } from "react";
import { useEffect } from "react/cjs/react.development";
import styled from "styled-components";
import BareButton from "../Components/BareButton";
import Card from "../Components/Card";
import HeadingContainer from "../Components/HeadingContainer";
import Pagination from "../Components/Pagination";
import ColumnContainer from "../Layout/ColumnContainer";
import FlexContainer from "../Layout/FlexContainer";
import Neon from "../Layout/Neon";
import Section from "../Layout/Section";
import { categories, latest, devops } from "../dev/data/articles";


const Container = styled.div`
    font-weight: lighter;
`;

const Articles = (props) => {

    const [page, setPage] = useState(1);
    const [results, setResults] = useState(latest);
    const [card, setCard] = useState(<Card content={results[page-1]} />);
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
            case "devops":
                setResults(devops);
                break;

            default:
                setResults(latest);
                break;
        }
    }, [currentCategory])

    useEffect( () => {
        setCard(<Card content={results[page-1]} />);
    }, [page, results]);
    
    
    return (
        <Section id="showcases">
            <Container>
                <HeadingContainer>
                    <h2>articles</h2>
                </HeadingContainer>
                <ColumnContainer>
                    <FlexContainer className="mt-2 pink">
                        {categoryElements}
                    </FlexContainer>
                    <FlexContainer className="mt-2">
                        <ColumnContainer>
                            <Pagination numberOfPages={results.length} setPage={setPage} currentPage={page} >
                                {card}
                            </Pagination>
                        </ColumnContainer>
                    </FlexContainer>
                </ColumnContainer>
            </Container>
        </Section>
    );
}

export default Articles;