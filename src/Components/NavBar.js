import {motion} from "framer-motion";
import styled from "styled-components";

const LinkContainer = styled.a`
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
        font-weight: 300;
    }

`;

const Blurred = styled.div`
    filter: blur(4px);
    position: absolute;
`;

const NavLink = (props) => {
    return (
        <LinkContainer href={props.href ?? "#"} className={props.className}>
            <div>{props.children}</div>
            <Blurred>{props.children}</Blurred>
        </LinkContainer>
    );
};

const NavBarContainer = styled(motion.div)`
    position: relative;
    display: flex;
    justify-content: flex-end;
    opacity: 0;
    
    >div {
        background: var(--obsidianDark08) ;
        z-index: var(--menuIndex);
        position: absolute;
        right: -3rem;
        top: -4rem;
        padding-top: 5rem;
        padding-right: 4rem;

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

const NavBar = ({toggled}) => {
    if (toggled) {
        return (
            <NavBarContainer animate={{ opacity: 1 }}>
                <div>
                    <NavLink href="#home" className="active">home</NavLink>
                    <NavLink href="#home">showcases</NavLink>
                    <NavLink href="#home">articles</NavLink>
                    <NavLink href="#home">about</NavLink>
                    <NavLink href="#home">contact</NavLink>
                </div>
            </NavBarContainer>
        );
    }    
    
    return null;
}

export default NavBar;