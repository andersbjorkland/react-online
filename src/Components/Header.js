import styled from "styled-components";
import DefaultLayoutContainer from "../Layout/DefaultLayoutContainer";
import Neon from "../Layout/Neon";
import { useEffect, useState } from "react";

import logo from "../assets/logo.svg";
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

 
    svg line {transition: 0.4s;}

    line:nth-child(3), line:nth-child(4) {
        transform-origin: 50%;
        transition: 0.3s;
    }
 
    .toggled {
        line:nth-child(1), line:nth-child(2) {
            transform: translate(11px, 0px) scaleX(0.15);
        }
        path {
            transform: scaleY(1);
            stroke-width: 2px;
        }
        line:nth-child(3) {
            transform: translateX(4.5px) translateY(2px) rotate(45deg)
        }
        line:nth-child(4) {
            transform: translateX(-4.5px) translateY(2px) rotate(-45deg)
        }
    }
    
`;

const BurgerIcon = ({toggled = false}) => {
    const svgWidth = {x1: "1", x2: "25"};
    const [svgClass, setSvgClass] = useState("");

    useEffect(() => {
        if (toggled) {
            setSvgClass("toggled")
        } else {
            setSvgClass("")
        }
        
    }, [toggled])


    return (
        <svg className={svgClass} width="25" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line y1="1" x1={svgWidth.x1} x2={svgWidth.x2} y2="1" stroke="white" strokeWidth="2"/>
            <line y1="10" x1={svgWidth.x1} x2={svgWidth.x2} y2="10" stroke="white" strokeWidth="2"/>
            <line y1="19" x1={svgWidth.x1} x2={svgWidth.x2/2} y2="19" stroke="white" strokeWidth="2"/>
            <line y1="19" x1={svgWidth.x2/2} x2={svgWidth.x2} y2="19" stroke="white" strokeWidth="2"/>
        </svg>
    );
}

const BurgerToggler = ({toggled, setToggled}) => {
    
    return (
        <BurgerTogglerContainer onClick={() => setToggled(!toggled)}>
            <Neon>
                <BurgerIcon toggled={toggled} />
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