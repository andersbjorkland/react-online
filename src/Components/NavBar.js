import {motion} from "framer-motion";
import styled from "styled-components";

const LinkContainer = styled(motion.a)`
    font-size: 2rem;
    color: white;
    display: flex;
    position: relative;
    text-decoration: none;
    font-weight: lighter;
    opacity: 0.1;

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
        <LinkContainer 
            href={props.href ?? "#"} 
            className={props.className}
            animate={{  opacity: 1}}
            transition={{ delay: (props.order) * 0.095, from: 0, duration: 0.3}}
            
            whileHover={{
                color: "var(--lightPink)"
            }}
        >
            <div>{props.children}</div>
            <Blurred>{props.children}</Blurred>
        </LinkContainer>
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
            <NavBarContainer>
                <div>
                    <NavLink order={1} href="#home" className="active">home</NavLink>
                    <NavLink order={2} href="#home">showcases</NavLink>
                    <NavLink order={3} href="#home">articles</NavLink>
                    <NavLink order={4} href="#home">about</NavLink>
                    <NavLink order={5} href="#home">contact</NavLink>
                </div>
            </NavBarContainer>
        );
    }    
    
    return null;
}

export default NavBar;