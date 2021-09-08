import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import Neon from "../Layout/Neon";
import Image from "./Image";

const Container = styled.article`
    display: flex;
    flex-direction: column;
    width: 100%;

    h4, p {
        color: var(--light-blue);
    }

    p {
        color: white;
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


const ArticleCard = ({article, ...props}) => {
    const image = article.img ? <Image className="slim" src={article.img.src} alt={article.img.alt ?? ""} />: false;
    const tags = article.tags ? article.tags.map(tag => (<span key={tag}>{tag}</span>)) : false;

    return (
        <Container>
            <h4>{article?.heading}</h4>
            { image }
            <MetaContainer><span>by {article?.meta?.author} </span><time> {article?.meta?.date}</time></MetaContainer>
            <p>{article?.summary}</p>
            {tags ? <FlexP>{tags}</FlexP> : false} 
            <FlexP className="right">read more on {getDomainFromUrl(article.url)} <a href={article.url}><Neon><FontAwesomeIcon icon={faExternalLinkAlt} /></Neon></a></FlexP>
        </Container>
    );
}

export default ArticleCard;