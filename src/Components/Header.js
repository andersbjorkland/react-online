import styled from "styled-components";
import logo from "../assets/logo.svg";
import arrow from "../assets/down-arrow.svg";
import DefaultLayoutContainer from "../Layout/DefaultLayoutContainer";
import Neon from "../Layout/Neon";

const LogoImg = styled.img`
    width: 2rem;
`;

const BurgerImg = styled.img``;

const DownArrow = () => (
    <Neon>
        <BurgerImg src={arrow} alt="" />
    </Neon>
);

const Header = () => (
    <header>
        <DefaultLayoutContainer>
            <LogoImg src={logo} alt="Site Logo" />
            <DownArrow />
        </DefaultLayoutContainer>
    </header>
);

export default Header;