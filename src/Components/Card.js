import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import Neon from "../Layout/Neon";

export const TYPES = {
    article: "article",
    showcase: "showcase"
}

export const THEMES = {
    pink: "pink",
    blue: "blue"
}

export const contentObject = {
    type: TYPES.showcase,
    heading: "",
    metaData: {
        date: "",
        author: "Anders"
    },
    url: "#",
    img: false,
    summary: "If you have many different projects, jumping between them, coding and pushing to production may be tedious. I know it is...",
    download: false
}

const Card = ({
        content,
        minimize = false 
    }) => {

    const Container = styled.div`
        color: ${content.type === TYPES.showcase ? "var(--lightPink)" : "var(--lightBlue)"};
        ${content.type === TYPES.article ? null : null}

        h4, * {
            color: ${content.type === TYPES.showcase ? "var(--lightPink)" : "var(--lightBlue)"};
        }

        &.minimize {
            display: flex;
            align-items: center;
            gap: 0.25rem;

            h4 {
                max-width: 60%;
            }
        }
    `;

    return (
        <Container className={minimize ? "minimize" : false}>
            <h4>{content.heading}</h4>
            <Neon><FontAwesomeIcon icon={faExternalLinkAlt} /> </Neon>
        </Container>
    );
}


export default Card;