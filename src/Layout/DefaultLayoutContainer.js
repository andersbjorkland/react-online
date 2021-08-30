import styled from 'styled-components'
import InnerContainer from './InnerContainer';


const StyledDiv = styled.div`
    width: 100%;
    padding: 0 2rem;
`


const DefaultLayoutContainer = (props) => (
    <StyledDiv>
        <InnerContainer>
            {props.children}
        </InnerContainer>
    </StyledDiv>
);



export default DefaultLayoutContainer;