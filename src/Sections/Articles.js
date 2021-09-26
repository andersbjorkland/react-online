import { forwardRef, useEffect, useState } from "react";
import styled from "styled-components";
import BareButton from "../Components/BareButton";
import HeadingContainer from "../Components/HeadingContainer";
import Pagination from "../Components/Pagination";
import ColumnContainer from "../Layout/ColumnContainer";
import FlexContainer from "../Layout/FlexContainer";
import Neon from "../Layout/Neon";
import { RefSection } from "../Layout/Section";
import { categories, latest, devops } from "../dev/data/articles";
import ArticleCard from "../Components/ArticleCard";


const Container = styled.div`
    font-weight: lighter;
`;

const Articles = forwardRef((props, ref) => {

    const [page, setPage] = useState(1);
    const [results, setResults] = useState(latest);
    const [card, setCard] = useState(<ArticleCard article={results[page-1]} />);
    const [currentCategory, setCurrentCategory] = useState(categories[0]);

    const categoryElements = categories.map(category => {
        return (
        <BareButton 
            key={category} 
            className={category === currentCategory ? "active" : false}
            callback={() => {
                    setCurrentCategory(category);
                    setResults(category === "devops" ? devops : latest);
                    setPage(1);
                }
            }
        >
            <Neon>{category}</Neon>
        </BareButton>)
    });

    useEffect( () => {
        setCard(<ArticleCard article={results[page-1]} />);
    }, [page, results]);
    
    
    return (
        <RefSection ref={ref} id="articles" className="text-blue">
            <Container>
                <HeadingContainer className="blue">
                    <h2>articles</h2>
                </HeadingContainer>
                <ColumnContainer>
                    <FlexContainer className="mt-2 blue">
                        {categoryElements}
                    </FlexContainer>
                    <FlexContainer className="mt-2 blue">
                        <ColumnContainer>
                            <Pagination numberOfPages={results.length} setPage={setPage} currentPage={page} color="blue">
                                {card}
                            </Pagination>
                        </ColumnContainer>
                    </FlexContainer>
                </ColumnContainer>
            </Container>
        </RefSection>
    );
});

export default Articles;