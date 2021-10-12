import { forwardRef } from "react";
import styled from "styled-components";
import HeadingContainer from "../Components/HeadingContainer";
import ColumnContainer from "../Layout/ColumnContainer";
import FlexContainer from "../Layout/FlexContainer";
import { RefSection } from "../Layout/Section";
import profilePic from "../assets/Profile.png"
import Image from "../Components/Image";


const Container = styled.div`
    font-weight: lighter;
    h3 {
        font-weight: bolder;
        color: var(--lightPink);
    }

    p {
        line-height: 175%;
    }

    a, p, li {
        color: var(--pinkWhite);
    }
    a {
        font-weight: 300;
    }
    li {
        margin-top: 0.4rem;
        font-size: 0.8rem;
    }

`;

const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;

    max-width: 25rem;
`;

const AboutContainer = styled.div`
    display: flex;
    flex-direction: column;

    @media screen and (min-width: 800px) {
        flex-direction: row;
        justify-content: space-between;

        &>div {
            width: 25%;
            min-width: 15rem;
        }
    }

`;

const About = forwardRef((props, ref) => {    
    
    return (
        <RefSection ref={ref} id="about" className={props.className ?? false}>
            <Container>
                <HeadingContainer>
                    <h2>about</h2>
                </HeadingContainer>
                <AboutContainer>
                    <ColumnContainer>
                        <p>The name is Anders Björkland. I love everything about web development - from the process of designing all the way through deploying. This is my space on the web for sharing my insights and projects. On my other site, andersbjorkland.se, I’ll focus on how I can help small and medium sized businesses with their web presence. If that’s more up your ally, check that site out! </p>
                    </ColumnContainer>
                    <ColumnContainer className="md-hidden">
                        <Image src={profilePic} alt="Fullstack webdeveloper Anders Björkland with his trusty coffee" />
                    </ColumnContainer>
                    <FlexContainer justify="space-between">
                        <InfoContainer>
                            <h3>technologies I adore <br /><span className="md-text">and occasionally write about</span></h3>
                            <FlexContainer>
                                <div>
                                <h4>languages</h4>
                                <ul>
                                    <li>PHP</li>
                                    <li>JavaScript</li>
                                    <li>CSS</li>
                                </ul>
                                </div>
                                <div className="">
                                    <h4>framework/libraries</h4>
                                    <ul>
                                        <li>Symfony</li>
                                        <li>React</li>
                                        <li>Sass</li>
                                    </ul>
                                </div>
                            </FlexContainer>
                        </InfoContainer>
                        <InfoContainer>
                        <h3>where ever I am social <br /><span className="md-text">reach out and make a connection</span></h3>
                        <FlexContainer>
                            <div>
                            <ul>
                                <li><a href="https://twitter.com/andersbjorkland" target="_blank" rel="noreferrer">Twitter</a></li>
                                <li><a href="https://www.linkedin.com/in/anders-bj%C3%B6rkland-9679b859/" target="_blank" rel="noreferrer">LinkedIn</a></li>
                                <li><a href="https://www.polywork.com/itsanders" target="_blank" rel="noreferrer">Polywork</a></li>
                            </ul>
                            </div>
                            <div>
                                <ul>
                                    <li><a href="https://dribbble.com/abjorkland" target="_blank" rel="noreferrer">Dribbble</a></li>
                                    <li><a href="https://www.instagram.com/andersbjorkland/" target="_blank" rel="noreferrer">Instagram</a></li>
                                </ul>
                            </div>
                        </FlexContainer>
                    </InfoContainer>
                    </FlexContainer>
                </AboutContainer>
            </Container>
        </RefSection>
    );
});

export default About;