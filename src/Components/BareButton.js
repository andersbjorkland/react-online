import styled from "styled-components";
import timedClickHandler from "../utilities/timedClickHandler";

const StyledButton = styled.button`
    background: none;
    border: none;
    font-weight: inherit;
    font-family: 'Roboto', sans-serif;
`;

const BareButton = ({callback, ...props}) => (
    <StyledButton className={props.className ?? false} onClick={() => timedClickHandler(callback)}>
        {props.children}
    </StyledButton>
);

export default BareButton;