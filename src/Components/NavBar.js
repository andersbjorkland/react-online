import { faLightbulb } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {motion} from "framer-motion";
import { useContext } from "react";
import styled from "styled-components";
import LightsContext from "../Hooks/LightsContext";
import ScrollContext from "../Hooks/ScrollContext";
import Neon from "../Layout/Neon";
import TogglerButton from "./TogglerButton";

const LinkContainer = styled(motion.a)`
    font-size: 2rem;
    color: white;
    display: flex;
    position: relative;
    text-decoration: none;
    font-weight: lighter;

    > * {
        position: relative;
    }

    &.active {
        font-weight: 400;
    }

`;


const NavItem = styled(motion.div)`
    opacity: 0.1;

    @media screen and (min-width: 800px) {
        opacity: 1;
    }
`;

const NavLink = (props) => {
    if (props.toggled) {
        return (
            <NavItem
                animate={{  opacity: 1}}
                transition={{ delay: (props.order) * 0.095, from: 0, duration: 0.3}}
    
                whileHover={{
                    color: "var(--lightPink)"
                }}
            >
                <LinkContainer
                    href={props.href ?? "#"}
                    className={props.className}
                >
                    <Neon>{props.children}</Neon>
                </LinkContainer>
            </NavItem>
        );
    }

    return (
        <NavItem>
            <LinkContainer
                href={props.href ?? "#"}
                className={props.className}
            >
                <Neon>{props.children}</Neon>
            </LinkContainer>
        </NavItem>
    );
};

const NavBarContainer = styled.div`
    &.toggled {
        display: flex;
    }

    display: none;
    position: relative;
    justify-content: flex-end;

    @media screen and (min-width: 800px) {
        display: flex;
    }

    >div {
        background: var(--obsidianDark08) ;
        z-index: var(--menuIndex);
        position: absolute;
        top: -4rem;
        padding-top: 5rem;
        padding-right: 1.5rem;
        margin-right: -1rem;

        height: calc(100vh + 4rem);
        width: calc(100vw + 1rem);
        overflow: hidden;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        gap: 1rem;
        position: absolute;

        @media screen and (min-width: 800px) {
            flex-direction: row;
            position: initial;

            height: fit-content;
            width: fit-content;

            padding: 0;
        }
    }
`;

const NavBar = ({toggled, setToggled}) => {
    const context = useContext(LightsContext);
    const scrollContext = useContext(ScrollContext);


    return (
        <NavBarContainer className={toggled ? "toggled" : false}>
            <div>
                <NavLink toggled={toggled} order={1} href="#home" className={scrollContext.scrolledTo === "home" ? "active" : null}>home</NavLink>
                <NavLink toggled={toggled} order={2} href="#showcases" className={scrollContext.scrolledTo === "showcases" ? "active" : null}>showcases</NavLink>
                <NavLink toggled={toggled} order={3} href="#articles" className={scrollContext.scrolledTo === "articles" ? "active" : null}>articles</NavLink>
                <NavLink toggled={toggled} order={4} href="#about" className={scrollContext.scrolledTo === "about" ? "active" : null}>about</NavLink>
                <NavLink toggled={toggled} order={5} href="#contact" className={scrollContext.scrolledTo === "contact" ? "active" : null}>contact</NavLink>
                <NavItem
                    animate={{  opacity: 1}}
                    transition={{ delay: 6 * 0.095, from: 0, duration: 0.3}}
        
                    whileHover={{
                        color: "var(--lightPink)"
                    }}
                >
                    <LightsContext.Consumer>
                        {({toggleLight}) => (
                            <TogglerButton callback={toggleLight} toggleState={!context.neonActivated}>
                                <FontAwesomeIcon className={context.neonActivated ? "white08" : "dark"} icon={faLightbulb} />
                            </TogglerButton>
                        )}
                    </LightsContext.Consumer>
                </NavItem>
            </div>
        </NavBarContainer>
    );

}

export default NavBar;