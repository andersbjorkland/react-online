import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
`;

const ColumnContainer = (props) => {
    
    return (
        <Container className={props.className ?? false}>
            {props.children}
        </Container>
    );
}

export default ColumnContainer;