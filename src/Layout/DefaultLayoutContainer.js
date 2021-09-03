import styled from 'styled-components'
import InnerContainer from './InnerContainer';


const StyledDiv = styled.div`
    width: 100%;
    padding: 0;
    z-index: 4;
`


const DefaultLayoutContainer = (props) => (
    <StyledDiv className={props.className}>
        <InnerContainer>
            {props.children}
        </InnerContainer>
    </StyledDiv>
);



export default DefaultLayoutContainer;