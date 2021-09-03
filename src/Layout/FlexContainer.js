import styled from "styled-components";

const Container = styled.div`
    display: flex;
`;

const FlexContainer = (props) => {
    
    return (
        <Container>
            {props.children}
        </Container>
    );
}

export default FlexContainer;