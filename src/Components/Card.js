import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faAlignLeft, faDownload, faExternalLinkAlt, faVideo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import styled from "styled-components";
import {interactions} from "../configuration/config";
import Neon from "../Layout/Neon";
import timedClickHandler from "../utilities/timedClickHandler";
import Image from "./Image";
import Video from "./Video";

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

const TextContainer = styled(motion.div)`
    padding: 0 0.25rem;
    
    p {
        font-weight: lighter;
        color: var(--pinkWhite);
    }

    &.hidden {
        display: none;
    }
`;

const ControlWrapper = styled.div`

`;

const variants = {
    show: { opacity: 1},
    hidden: {opacity: 0} 
}

const INTERACTION_TIMEOUT = interactions.buttonTimeout;

const CardController = ({content, controls}) => {

    const [showText, setShowText] = useState(true);
    const [textClass, setTextClass] = useState("hidden");
    const textElement = content.summary ? <p>{content.summary}</p>: null;

    const activeButtons = {
        text: content.summary ?? false,
        video: content.video?.url?.length > 0 ? content.video : false,
        github: content.github.length > 0 ? content.github : false,
        download: content.download.length > 0 ? content.download : false,
        link: content.url.length > 0 ? content.url : false
    }

    const buttonIcons = {
        text: <FontAwesomeIcon icon={faAlignLeft} />,
        video: <FontAwesomeIcon icon={faVideo} />,
        github: <FontAwesomeIcon icon={faGithub} />,
        download: <FontAwesomeIcon icon={faDownload} />,
        link: <FontAwesomeIcon icon={faExternalLinkAlt} />
    }

    const buttons = Object.keys(activeButtons).map(key => {
        if (key === "text") {
            return (
                <ControlButton key={key} title="Toggle hiding description" className={activeButtons[key] !== false ? false : "inactive"} onClick={() => timedClickHandler(() => setShowText(!showText))}>
                    <Neon active={activeButtons[key] !== false}>{buttonIcons[key]}</Neon>
                </ControlButton>
            );
        } else if (activeButtons[key] === false) {
            return (
                <ControlButton key={key} className={activeButtons[key] !== false ? null : "inactive"}>
                    <Neon active={activeButtons[key] !== false}>{buttonIcons[key]}</Neon>
                </ControlButton>
            );
        } else if (key === "video") {
            return (
                <ControlButton key={key} title="Toggle between video or image" className={activeButtons[key] !== false ? null : "inactive"} onClick={() => timedClickHandler(() => {
                    controls.mediaToggle();
                })}>
                    <Neon active={activeButtons[key] !== false}>{buttonIcons[key]}</Neon>
                </ControlButton>
            );
        }

        return (
            <ControlLink href={activeButtons[key] ?? null} target="_blank" key={key} className={activeButtons[key] !== false ? null : "inactive"}>
                <Neon active={activeButtons[key] !== false}>{buttonIcons[key]}</Neon>
            </ControlLink>
        );
    });

    useEffect(() => {
        if (showText){
            setTextClass("show")
        } else {
            setTimeout(() => {
                setTextClass("hidden");
            }, INTERACTION_TIMEOUT);
        }
    }, [showText]);

    return (
        <ControlWrapper>
            <ControllerContainer>
                {buttons}
            </ControllerContainer>
            <TextContainer 
                className={textClass}
                animate={showText ? "show" : "hidden"}
                variants={variants}
            >
                {textElement}
            </TextContainer>
        </ControlWrapper>
    );

}

const CardContainer = styled.div`
    width: 100%;
    max-width: 22rem;

    h4, * {
        color: ${props => props.content.type === TYPES.showcase ? "var(--lightPink)" : "var(--lightBlue)"};
    }

    &.minimize {
        display: flex;
        align-items: center;
        gap: 0.25rem;
    }

    &.normal {
        min-height: 20rem;
    }
`;

const MediaContainer = styled.div`
    min-height: 12rem;
`;

const Card = ({
        content,
        minimize = false 
    }) => {

    const [showingVideo, setShowingVideo] = useState(false);
    let video = content.video ?? false;
    let videoElement = false;
    if (video) {
        if (video.url.length > 0) {
            videoElement = (
                <Video controls autoPlay muted loop>
                    <source src={video.url} type="video/webm" crossOrigin="anonymous" />
                    Sorry, your browser doesn't support embedded videos
                </Video>
            );
        }
    }

    const videoHandler = () => {
        if (videoElement) {
            setShowingVideo(!showingVideo);
        }
    }

    const image = content.img ? <Image onClick={videoHandler} className={minimize ? "hidden" : "slim"} src={content.img.src} alt={content.img.alt ?? ""} />: false;

    return (
        <CardContainer content={content} className={minimize ? "minimize" : "normal"}>
            <h4>{content.heading}</h4>
            <MediaContainer>
                {showingVideo ? videoElement : image}
            </MediaContainer>
            {minimize ? <Neon><FontAwesomeIcon icon={faExternalLinkAlt} /></Neon> : <CardController content={content} controls={{mediaToggle: videoHandler}} />}
            
        </CardContainer>
    );
}


export default Card;