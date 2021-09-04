import { useState } from "react";
import styled from "styled-components";
import timedClickHandler from "../utilities/timedClickHandler";

const StyledButton = styled.button`
    padding: 0;
    outline: none;
    border: none;
    position: relative;

    border-radius: 0.4rem;

    min-width: 2rem;
    min-height: 2rem;

    display: flex;
    justify-content: center;
    align-items: center;

    transition: 0.2s;

    box-shadow: 0px 4px 4px rgba(0,0,0,0.8);
    background: linear-gradient(0deg, rgba(65,65,65,1) 0%, rgba(157,157,157,1) 100%);

    &::before {
        transition: 0.3s;
        content: '';
        height: 100%;
        width: 100%;
        position: absolute;
        right: 0;
        top: 0;
        background-color: rgba(0,0,0,0.4);
        opacity: 0;
    }

    &.active {
        transform: translate3d(2px, -2px, -4px);
        box-shadow: 0px 0px 1px rgba(0,0,0,0.6);

        &::before {
            opacity: 1;
        }
    }
`;

const TogglerButton = ({callback, toggleState = false, ...props}) => {
    
    const [toggle, setToggle] = useState(toggleState);

    const handleClick = () => {
        setToggle(!toggle);
        callback();
    }
    
    return (
        <StyledButton className={toggle ? 'active' : ''} onClick={() => timedClickHandler(handleClick)}>{props.children}</StyledButton>
    )
};

export default TogglerButton;