import { forwardRef } from 'react';
import styled from 'styled-components';
import DefaultLayoutContainer from './DefaultLayoutContainer';

const Container = styled.section`
    padding-top: 4rem;

    @media screen and (min-width: 800px){
        &:nth-child(n + 3) {
            margin-top: 6rem;;
        }
    }
`;


const Section = ({id = false, ...props}) => {

    return (
        <Container id={id} className={props.className ?? false}>
            <DefaultLayoutContainer>
                {props.children}
            </DefaultLayoutContainer>
        </Container>
    )
};

export const RefSection = forwardRef((props, ref) => (
    <Container id={props.id ?? false} ref={ref} className={props.className ?? false}>
        <DefaultLayoutContainer>
            {props.children}
        </DefaultLayoutContainer>
    </Container>
));



export default Section;