import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faAlignLeft, faDownload, faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import Neon from "../Layout/Neon";
import Image from "./Image";

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
    github: false,
    url: "#",
    img: false,
    summary: "If you have many different projects, jumping between them, coding and pushing to production may be tedious. I know it is...",
    download: false
}

const CardController = ({content}) => {
    const ControllerContainer = styled.div`
        width: 100%;
        
        display: flex;
        justify-content: space-between;
        gap: 1rem;
    `;

    const ControlButton = styled.button`
        border: none;
        background: none;

        &.inactive {
            * {
                color: #2E2E2E;
            }
        }
    `;

    const ControlLink = styled.a`
        border: none;
        background: none;

        &.inactive {
            * {
                color: #2E2E2E;
            }
        }
    `;

    const activeButtons = {
        text: content.summary ?? false,
        github: content.github ?? false,
        download: content.download ?? false,
        link: content.url ?? false
    }

    const buttonIcons = {
        text: <FontAwesomeIcon icon={faAlignLeft} />,
        github: <FontAwesomeIcon icon={faGithub} />,
        download: <FontAwesomeIcon icon={faDownload} />,
        link: <FontAwesomeIcon icon={faExternalLinkAlt} />
    }

    const buttons = Object.keys(activeButtons).map(key => {
        if (key === "text") {
            return (
                <ControlButton key={key} className={activeButtons[key] !== false ? null : "inactive"}>
                    <Neon active={activeButtons[key] !== false}>{buttonIcons[key]}</Neon>
                </ControlButton>
            );
        }

        return (
            <ControlLink href={activeButtons[key]} target="_blank" key={key} className={activeButtons[key] !== false ? null : "inactive"}>
                <Neon active={activeButtons[key] !== false}>{buttonIcons[key]}</Neon>
            </ControlLink>
        );
    });

    return (
        <ControllerContainer>
            {buttons}
        </ControllerContainer>
    );

}

const Card = ({
        content,
        minimize = false 
    }) => {

    

    const Container = styled.div`
        width: 100%;
        max-width: 22rem;

        h4, * {
            color: ${content.type === TYPES.showcase ? "var(--lightPink)" : "var(--lightBlue)"};
        }

        &.minimize {
            display: flex;
            align-items: center;
            gap: 0.25rem;
        }
    `;

    const image = content.img ? <Image src={content.img.src} alt={content.img.alt ?? ""} />: false;
    const TextContainer = styled.div`
    
    `;

    return (
        <Container className={minimize ? "minimize" : false}>
            <h4>{content.heading}</h4>
            {image}
            {minimize ? <Neon><FontAwesomeIcon icon={faExternalLinkAlt} /></Neon> : <CardController content={content} />}
            
        </Container>
    );
}


export default Card;