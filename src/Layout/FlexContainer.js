import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: ${props => props.gap ? props.gap + "rem" : "0.5rem"};

    justify-content: ${props => props.justify ?? false};

    &.right {
        justify-content: flex-end;
    }

    &.baseline {
        align-items: baseline;
    }
`;

const FlexContainer = (props) => {
    
    return (
        <Container gap={props.gap ?? false} justify={props.justify ?? false} className={props.className ?? false}>
            {props.children}
        </Container>
    );
}

export default FlexContainer;