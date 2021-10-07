import { forwardRef, useContext, useEffect, useState } from "react";
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
import { fetchArticles } from "../utilities/fetchResults";
import ResizeContext from "../Hooks/ResizeContext";


const Container = styled.div`
    font-weight: lighter;
`;

const Articles = forwardRef((props, ref) => {
    const resizeContext = useContext(ResizeContext);

    const [page, setPage] = useState(1);
    const [pages, setPages] = useState(1);
    const [resultsPerPage, setResultsPerPage] = useState(1);
    const [results, setResults] = useState(null);
    const [tags, setTags] = useState(["latest"]);
    const [card, setCard] = useState();
    const [currentCategory, setCurrentCategory] = useState(tags[0]);

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

    const categoryElements = tags.map(category => {
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

    useEffect(() => {
        fetchArticles(page, resultsPerPage, currentCategory)
            .then(result => {
                setResults(result.result);
                console.log(result);
                let pages = Math.ceil(result.meta.items/resultsPerPage);
                setPages(pages);
                setTags(["latest", ...result.meta.tags])
            })
            .catch(error => console.error(error));

    }, [page, resultsPerPage, currentCategory]);
    
    
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
                                className={category === currentCategory ? "active" : false}
                                callback={() => {
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