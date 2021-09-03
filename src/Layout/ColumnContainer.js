import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;

`;

const ColumnContainer = (props) => {
    
    return (
        <Container>
            {props.children}
        </Container>
    );
}

export default ColumnContainer;