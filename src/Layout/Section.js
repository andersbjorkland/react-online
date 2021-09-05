import styled from 'styled-components';
import DefaultLayoutContainer from './DefaultLayoutContainer';

const Container = styled.section`
    margin-top: 4rem;
`;

const Section = ({id = false, ...props}) => (
    <Container id={id} className={props.className ?? false}>
        <DefaultLayoutContainer>
            {props.children}
        </DefaultLayoutContainer>
    </Container>
);



export default Section;