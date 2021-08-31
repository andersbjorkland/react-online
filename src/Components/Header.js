import styled from "styled-components";
import DefaultLayoutContainer from "../Layout/DefaultLayoutContainer";
import Neon from "../Layout/Neon";
import { useState } from "react";

import burger from "../assets/burger-menu.svg";
import logo from "../assets/logo.svg";
import arrow from "../assets/down-arrow.svg";
import NavBar from "./NavBar";


const HeaderContainer = styled.header`
    display: flex;
    flex-direction: column;

    .first-row {
        display: flex;
        z-index: var(--headerIndex);
    }
`;

const LogoImg = styled.img`
    width: 2rem;
`;

const BurgerTogglerContainer = styled.div`
    margin-left: auto;
    position: relative;
    top: 0.3rem;
`;

const BurgerToggler = ({toggled, setToggled}) => {
    
    return (
        <BurgerTogglerContainer onClick={() => setToggled(!toggled)}>
            <Neon>
                {toggled ? <img src={arrow} alt="" /> : <img src={burger} alt="" />} 
            </Neon>
        </BurgerTogglerContainer>
    );
}

const Header = () => {
    const [toggled, setToggled] = useState(false);

    return (
        <DefaultLayoutContainer>
            <HeaderContainer>
                <div className="first-row">
                    <LogoImg src={logo} alt="Site Logo" />
                    <BurgerToggler toggled={toggled} setToggled={setToggled} />
                </div>
                <nav><NavBar toggled={toggled} /></nav>
            </HeaderContainer>
        </DefaultLayoutContainer>
    );
}

export default Header;