import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DOMPurify from "dompurify";
import styled from "styled-components";
import FlexContainer from "../Layout/FlexContainer";
import Neon from "../Layout/Neon";
import Image from "./Image";

const Container = styled.article`
    width: 100%;
    max-width: 22rem;

    display: flex;
    flex-direction: column;
    color: var(--lightBlue);


    h4, p, a {
        color: var(--lightBlue);
    }

    p {
        font-weight: lighter;
    }

    a {
        display: flex;
        gap: 0.5rem;
        text-decoration: none;
        font-weight: normal;
        font-size: 0.8rem;
    }

    font-size: 1rem;

`;

const MetaContainer = styled.div`
    opacity: 0.7;
    font-style: italic;
    font-size: 0.75rem;
`;

const FlexP = styled.p`
    display: flex;
    gap: 0.5rem;

    &.right {
        margin-left: auto;
    }
`;

const getDomainFromUrl = (url) => {
    let domain = "";
    const protocolIndex = url.indexOf("://");
    const startIndex = protocolIndex >= 0 ? protocolIndex + 3 : 0;
    const indexOfNextSlash = url.indexOf("/", startIndex);

    if (indexOfNextSlash >= 0) {
        domain = url.substr(startIndex, indexOfNextSlash - startIndex);
    } else {
        domain = url.substr(startIndex);
    }

    return domain;
}


const ArticleCard = ({article, minimize = false, ...props}) => {
    const image = article.cover_image ? <Image className={minimize ? "slim sm-hidden": "slim"} src={article.cover_image} alt={article.title ?? ""} />: false;
    const tags = article.tag_list ? article.tag_list.map(tag => (<span key={tag}>{tag}</span>)) : false;

    return (
        <Container>
            <h4>{article?.title}</h4>
            { image }
            <MetaContainer><span>by {article.user.name} </span><time> {article.readable_publish_date}</time></MetaContainer>
            <p>{ DOMPurify.sanitize(article.description, {USE_PROFILES: {html: true}}) }</p>
            {tags ? <FlexP>{tags}</FlexP> : false} 
            <FlexContainer className="baseline right"><a href={article.canonical_url} target="_blank" rel="noopener noreferrer">read more on {getDomainFromUrl(article.canonical_url)} <Neon><FontAwesomeIcon icon={faExternalLinkAlt} /></Neon></a></FlexContainer>
        </Container>
    );
}

export default ArticleCard;