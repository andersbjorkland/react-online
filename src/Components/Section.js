import styled from 'styled-components'
import InnerContainer from './InnerContainer';


const StyledSection = styled.section`
    background: blue;
    width: 100%;
    padding: 0 2rem;
`


const Section = (props) => <StyledSection><InnerContainer>{props.children}</InnerContainer></StyledSection>;



export default Section;