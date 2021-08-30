import styled from "styled-components";
import DefaultLayoutContainer from "../Layout/DefaultLayoutContainer";

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
        font-weight: bold;
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

const NavBarStyle = styled.nav`
    display: flex;
    flex-direction: column;

    gap: 1rem;
    
`;

const NavBar = () => (
    <DefaultLayoutContainer>
        <NavBarStyle>
            <NavLink href="#home" className="active">home</NavLink>
            <NavLink href="#home">showcases</NavLink>
            <NavLink href="#home">articles</NavLink>
            <NavLink href="#home">about</NavLink>
            <NavLink href="#home">contact</NavLink>
        </NavBarStyle>
    </DefaultLayoutContainer>
);

export default NavBar;