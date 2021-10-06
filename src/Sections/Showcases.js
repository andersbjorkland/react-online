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
import ResizeContext from "../Hooks/ResizeContext";
import fetchResults, { fetchProjectsCategories } from "../utilities/fetchResults";


const Container = styled.div`
    font-weight: lighter;
`;

const Showcases = forwardRef((props, ref) => {

    const resizeContext = useContext(ResizeContext);
    const [resultsPerPage, setResultsPerPage] = useState(1);
    const [numberOfPages, setNumberOfPages] = useState(1);
    const [isFetching, setIsFetching] = useState(false);
    const [page, setPage] = useState(1);
    const [results, setResults] = useState([]);
    const [projectCategories, setProjectCategories] = useState(["latest"]);
    const [currentCategory, setCurrentCategory] = useState(projectCategories[0]);

    useEffect(() => {
        setIsFetching(true);
        fetchResults("", page, resultsPerPage, currentCategory)
            .then(pageResults => {
                setResults(pageResults.results);
                setNumberOfPages(pageResults.pages);
                setIsFetching(false);
            })
            .catch(error => {
                console.error(error);
                setIsFetching(false);
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

    useEffect(() => {
        fetchProjectsCategories()
            .then(result => {
                const categories = ["latest", ...result.map(category => category["name"])];
                setProjectCategories(categories);
            })
            .catch(error => console.error(error));
    }, []);
    
    return (
        <RefSection id="showcases" ref={ref} className={props.className ?? false}>
            <Container>
                <HeadingContainer>
                    <h2>showcases</h2>
                </HeadingContainer>
                <ColumnContainer>
                    <FlexContainer className="mt-2 pink">
                        {projectCategories.map(category => (
                            <BareButton 
                                key={category} 
                                className={category === currentCategory ? (isFetching ? false : "active") : false}
                                callback={() => {
                                        setIsFetching(true);
                                        setCurrentCategory(category);
                                        setPage(1);
                                    }
                                }
                            >
                                <Neon>{category}</Neon>
                            </BareButton>)
                        )}
                    </FlexContainer>
                    <FlexContainer justify="center" className="mt-2">
                        <ColumnContainer>
                            <Pagination numberOfPages={numberOfPages} setPage={setPage} currentPage={page} color="pink">
                                <FlexContainer justify="center" gap={{column: 2}}>{results.map(el => <Card key={el.heading + el.meta.date} content={el} />)}</FlexContainer>
                            </Pagination>
                        </ColumnContainer>
                    </FlexContainer>
                </ColumnContainer>
            </Container>
        </RefSection>
    );
});

export default Showcases;