import styled from 'styled-components'
import DefaultLayoutContainer from './DefaultLayoutContainer';
import InnerContainer from './InnerContainer';


const StyledSection = styled.section`
    width: 100%;
    padding: 0 2rem;
`


const Section = (props) => (
    <DefaultLayoutContainer>
        {props.children}
    </DefaultLayoutContainer>
);



export default Section;