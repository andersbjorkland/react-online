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
`;

const NavLink = (props) => {
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
};

const NavBarContainer = styled.div`
    position: relative;
    display: flex;
    justify-content: flex-end;

    >div {
        background: var(--obsidianDark08) ;
        z-index: var(--menuIndex);
        position: absolute;
        top: -4rem;
        padding-top: 5rem;
        padding-right: 1.5rem;
        margin-right: -1rem;

        height: 100vh;
        width: 100vw;
        overflow: hidden;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        gap: 1rem;
        position: absolute;
    }
`;

const NavBar = ({toggled, setToggled}) => {
    const context = useContext(LightsContext);
    const scrollContext = useContext(ScrollContext);


    if (toggled) {
        return (
            <NavBarContainer>
                <div>
                    <NavLink order={1} href="#home" className={scrollContext.scrolledTo === "home" ? "active" : null}>home</NavLink>
                    <NavLink order={2} href="#showcases" className={scrollContext.scrolledTo === "showcases" ? "active" : null}>showcases</NavLink>
                    <NavLink order={3} href="#articles" className={scrollContext.scrolledTo === "articles" ? "active" : null}>articles</NavLink>
                    <NavLink order={4} href="#about" className={scrollContext.scrolledTo === "about" ? "active" : null}>about</NavLink>
                    <NavLink order={5} href="#contact" className={scrollContext.scrolledTo === "contact" ? "active" : null}>contact</NavLink>
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

    return null;
}

export default NavBar;