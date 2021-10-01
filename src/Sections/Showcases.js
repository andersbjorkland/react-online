import { forwardRef, useContext, useState } from "react";
import { useEffect } from "react";
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
import ResizeContext from "../Hooks/ResizeContext";
import fetchResults from "../utilities/fetchResults";


const Container = styled.div`
    font-weight: lighter;
`;

const Showcases = forwardRef((props, ref) => {

    const resizeContext = useContext(ResizeContext);
    const [resultsPerPage, setResultsPerPage] = useState(1);
    const [numberOfPages, setNumberOfPages] = useState(1);
    const [page, setPage] = useState(1);
    const [results, setResults] = useState([]);
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

    useEffect(() => {

        fetchResults("", page, resultsPerPage, currentCategory)
            .then(pageResults => {
                setResults(pageResults.results);
                setNumberOfPages(pageResults.pages);
            })
    }, [page, resultsPerPage, currentCategory]);

    useEffect(() => {
        if (resizeContext.width > 800) {
            setResultsPerPage(3);
            const parsedPage = Math.ceil(page / resultsPerPage);
            setPage(parsedPage);
        } else {
            setResultsPerPage(1);
            const parsedPage = page * resultsPerPage;
            setPage(parsedPage);
        }
    }, [resizeContext.width, page, resultsPerPage]);
    
    return (
        <RefSection id="showcases" ref={ref} className={props.className ?? false}>
            <Container>
                <HeadingContainer>
                    <h2>showcases</h2>
                </HeadingContainer>
                <ColumnContainer>
                    <FlexContainer className="mt-2 pink">
                        {categoryElements}
                    </FlexContainer>
                    <FlexContainer justify="center" className="mt-2">
                        <ColumnContainer>
                            <Pagination numberOfPages={numberOfPages} setPage={setPage} currentPage={page} color="pink">
                                <FlexContainer gap={{column: 2}}>{results.map(el => <Card key={el.heading + el.meta.date} content={el} />)}</FlexContainer>
                            </Pagination>
                        </ColumnContainer>
                    </FlexContainer>
                </ColumnContainer>
            </Container>
        </RefSection>
    );
});

export default Showcases;