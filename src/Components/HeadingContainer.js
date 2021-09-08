import styled from "styled-components";

const HeadingStyle = styled.div`
    position: relative;

    width: fit-content;
    height: fit-content;
    z-index: 1;

    margin-left: 0.5rem;

    /* &::before, &::after {
        content: '';
        
        box-sizing: content-box;

        width: 100%;
        height: 100%;
        padding: 1rem 0.5rem 0.2rem 0.5rem;

        position: absolute;
        background: var(--linearPurple);
        left: -0.5rem;
        top: -0.5rem;
        
        z-index: -1;
    }

    &::after {
        left: -1rem;
        top: -1rem;
        background: none;
        outline: solid 1px var(--darkPurple);

        z-index: -2;
    } */
`;

const SolidBox = styled.div`
    box-sizing: content-box;

    width: 100%;
    min-height: 2rem;
    height: 100%;

    position: absolute;
    padding: 1rem 0.5rem 0.2rem 0.5rem;

    background: var(--linearPurple);
    left: -0.5rem;
    top: -0.5rem;

    &.blue {
        background: var(--linearBlue);
    }
    
    z-index: -1;
`;

const OuterBox = styled.div`

width: 100%;
height: 100%;
padding: 0.1rem;
background: var(--linearPurple);
&.blue {
    background: var(--linearBlue);
}

z-index: -1;

`;

const InnerBox = styled.div`
    width: 100%;
    height: 100%;
    background-color: var(--obsidianDark);

`;

const StackedBoxes = styled.div`
    width: 100%;
    height: 100%;
    padding: 0.5rem;
    box-sizing: content-box;


    display: flex;
    position: absolute;
    z-index: -1;

    top: -1.5rem;
    left: -1.5rem;

    > * {
        position: absolute;
    }
`;

const LinearOutline = (props) => (
    <StackedBoxes>
        <OuterBox className={props.className ?? false} >
            <InnerBox />
        </OuterBox>
    </StackedBoxes>
);

const HeadingBackground = (props) => {

    return (
        <>
            <LinearOutline className={props.className ?? false} />
            <SolidBox className={props.className ?? false} />
        </>
    );

}


const HeadingContainer = (props) => (
    <HeadingStyle>
        <HeadingBackground className={props.className ?? false} />
        {props.children}
    </HeadingStyle>
)

export default HeadingContainer;