import { forwardRef, useEffect, useState } from "react";
import styled from "styled-components";
import ArticleCard from "../Components/ArticleCard";
import Card, { contentObject } from "../Components/Card";
import ColumnContainer from "../Layout/ColumnContainer";
import FlexContainer from "../Layout/FlexContainer";
import { RefSection } from "../Layout/Section";
import fetchResults, { fetchArticles } from "../utilities/fetchResults";

const HeadingP = styled.p`
    margin: 0;
    padding-top: 0.5rem;
    color: var(--pinkWhite);
`;

const Heading = styled.h1`
    max-width: 700px;

    @media screen and (min-width: 600px) {
        font-size: 3rem;
    }
`;

const Home = forwardRef((props, ref) => {

    const [latestArticle, setLatestArticle] = useState(null);
    const [latestShowcase, setLatestShowcase] = useState(null);
    
    useEffect(() => {
        fetchArticles(1, 1, "latest").then(response => {
            if (response.result.length > 0) {
                setLatestArticle(response.result);
            }
        });

        fetchResults("", 1, 1, "latest")
            .then(pageResults => {
                setLatestShowcase(pageResults.results);
            })
            .catch(error => {
                console.error(error);
            })
    }, []);

    const featured = {
        ...contentObject,
        heading: "markdown live editor",
        meta: {
            date: "March 23 2021",
            author: "Anders"
        },
        url: "https://mdle.andersbjorkland.online",
        github: "https://github.com/andersbjorkland/retro-md",
        img: {
            src: "https://mdle.andersbjorkland.online/mdle--og.png",
            alt: "retro Markdown Live Editor - write markdown in an Amiga 500-inspired environment."
        },
        summary: "retro-inspired editor bringing the Amiga 500 to markdown with a live preview. Built with React and Redux."
    };

    return (
        <RefSection id="home" ref={ref} className={props.className ?? false}>
            <HeadingP>I'm Anders Björkland</HeadingP>
            <Heading className="mt-0">I design, develop and deploy modern web solutions</Heading>
            <FlexContainer justify="space-around" className="mt-4 md--mt-8">
                <ColumnContainer className="blue">
                    <h3>latest article</h3>
                    {latestArticle ? latestArticle.map(article => <ArticleCard key={article.id} article={{...article}} minimize={true} />) : false}
                </ColumnContainer>
                <ColumnContainer>
                    <h3 className="pink">featured work</h3>
                    <Card content={{...featured}} />
                </ColumnContainer>
                <ColumnContainer className="sm-hidden">
                    <h3 className="pink">latest work</h3>
                    {latestShowcase ? latestShowcase.map(showcase => <Card key={showcase.heading + showcase.meta.date} content={showcase} />) : false}
                </ColumnContainer>
            </FlexContainer>
        </RefSection>
    );
});

export default Home;