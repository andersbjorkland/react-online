import { forwardRef, useContext, useEffect, useState } from "react";
import styled from "styled-components";
import BareButton from "../Components/BareButton";
import HeadingContainer from "../Components/HeadingContainer";
import Pagination from "../Components/Pagination";
import ColumnContainer from "../Layout/ColumnContainer";
import FlexContainer from "../Layout/FlexContainer";
import Neon from "../Layout/Neon";
import { RefSection } from "../Layout/Section";
import ArticleCard from "../Components/ArticleCard";
import { fetchArticles } from "../utilities/fetchResults";
import ResizeContext from "../Hooks/ResizeContext";

const Container = styled.div`
    font-weight: lighter;
`;

const Articles = forwardRef((props, ref) => {
    const resizeContext = useContext(ResizeContext);

    const [page, setPage] = useState(1);
    const [pages, setPages] = useState(1);
    const [resultsPerPage, setResultsPerPage] = useState(resizeContext.width > 800 ? 3 : 1);
    const [results, setResults] = useState([]);
    const [tags, setTags] = useState(["latest"]);
    const [isFetching, setIsFetching] = useState(false);
    const [currentCategory, setCurrentCategory] = useState(tags[0]);

    useEffect(() => {

        
        setIsFetching(true);

        let parsedPage = 1;
        let perPage = 3;
        if (resultsPerPage > 2) {
            parsedPage = Math.ceil(page / perPage);
            setPage(parsedPage);
        } else {
            perPage = 1;
            parsedPage = page * perPage;
            setPage(parsedPage);
        }
        
        fetchArticles(parsedPage, perPage, currentCategory)
            .then(result => {
                setResults(result.result);
                let pages = Math.ceil(result.meta.items/perPage);
                setPages(pages);
                setTags(["latest", ...result.meta.tags]);
                setIsFetching(false);
            })
            .catch(error => {
                console.error(error);
                setIsFetching(false);
            });

    }, [page, resultsPerPage, currentCategory]);

    useEffect(() => {
        if (resizeContext.width > 800) {
            setResultsPerPage(3);
        } else {
            setResultsPerPage(1);
        }
    }, [resizeContext.width])
    
    
    return (
        <RefSection ref={ref} id="articles" className={props.className ? props.className + " text-blue" : false} >
            <Container>
                <HeadingContainer className="blue">
                    <h2>articles</h2>
                </HeadingContainer>
                <ColumnContainer>
                    <FlexContainer className="mt-2 blue">
                        {tags.map( category => {
                            return (
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
                        })}
                    </FlexContainer>
                    <FlexContainer justify="center" className="mt-2">
                        <ColumnContainer>
                            <Pagination numberOfPages={pages} setPage={setPage} currentPage={page} color="blue">
                                <FlexContainer justify="center" gap={{column: 2}}>{results ? results.map(result => <ArticleCard key={result.id} article={result} /> ) : false }</FlexContainer>
                            </Pagination>
                        </ColumnContainer>
                    </FlexContainer>
                </ColumnContainer>
            </Container>
        </RefSection>
    );
});

export default Articles;