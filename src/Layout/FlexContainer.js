import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    ${props => props.gap.default ? "gap: " + props.gap.default + "rem" : "gap: 0.5rem"};
    ${props => props.gap?.column ? "column-gap: " + props.gap.column + "rem" : false };
    ${props => props.gap?.row ? "row-gap: " + props.gap.row + "rem" : false };

    justify-content: ${props => props.justify ?? false};

    &.right {
        justify-content: flex-end;
    }

    &.baseline {
        align-items: baseline;
    }
`;

const FlexContainer = (props) => {
    let gap = false;
    if (props.gap && typeof props.gap === 'object') {
        gap = {...props.gap}
    } else if (props.gap) {
        gap = {default: "0.5rem"};
    }

    return (
        <Container gap={gap} justify={props.justify ?? false} className={props.className ?? false}>
            {props.children}
        </Container>
    );
}

export default FlexContainer;