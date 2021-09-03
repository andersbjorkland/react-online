import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

const FlexContainer = (props) => {
    
    return (
        <Container>
            {props.children}
        </Container>
    );
}

export default FlexContainer;