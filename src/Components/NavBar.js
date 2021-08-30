import styled from "styled-components";
import DefaultLayoutContainer from "../Layout/DefaultLayoutContainer";

const NavLink = (props) => {
    const LinkContainer = styled.a`
        font-size: 2rem;
        color: white;
        display: flex;
        position: relative;
        text-decoration: none;
        

        > * {
            position: relative;
        }

        
    `;
    const Blurred = styled.div`
        filter: blur(4px);
        position: absolute;
    `;

    return (
        <LinkContainer href={props.href ?? "#"}>
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
            <NavLink href="#home">home</NavLink>
            <NavLink href="#home">showcases</NavLink>
            <NavLink href="#home">articles</NavLink>
            <NavLink href="#home">about</NavLink>
            <NavLink href="#home">contact</NavLink>
        </NavBarStyle>
    </DefaultLayoutContainer>
);

export default NavBar;