import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

const FlexContainer = (props) => {
    
    return (
        <Container className={props.className ?? false}>
            {props.children}
        </Container>
    );
}

export default FlexContainer;