import Card, { contentObject, TYPES } from "../Components/Card";
import HeadingContainer from "../Components/HeadingContainer";
import ColumnContainer from "../Layout/ColumnContainer";
import FlexContainer from "../Layout/FlexContainer";
import Section from "../Layout/Section";

const Home = (props) => {
    const article = {
        ...contentObject,
        type: TYPES.article,
        heading: "How to deploy with Deployer and Github Actions",
        meta: {
            date: "March 23 2021",
            author: "Anders"
        },
        url: "#",
        summary: "If you have many different projects, jumping between them, coding and pushing to production may be tedious. I know it is..."
    };

    const featured = {
        ...contentObject,
        heading: "markdown live editor",
        meta: {
            date: "March 23 2021",
            author: "Anders"
        },
        url: "https://mdle.andersbjorkland.online",
        github: "https://github.com/andersbjorkland/retro-md",
        img: {
            src: "https://mdle.andersbjorkland.online/mdle--og.png",
            alt: "retro Markdown Live Editor - write markdown in an Amiga 500-inspired environment."
        },
        summary: "retro-inspired editor bringing the Amiga 500 to markdown with a live preview. Built with React and Redux."
    };

    return (
        <Section id="home">
            <HeadingContainer>
                <h1><span className="md-text">I design, develop and deploy</span><br /> modern web solutions</h1>
            </HeadingContainer>
            <FlexContainer>
                <ColumnContainer>
                    <h3 className="blue">latest article</h3>
                    <Card 
                        content={{...article}}
                        minimize={true}
                    />
                </ColumnContainer>
                <ColumnContainer>
                    <h3 className="pink">featured work</h3>
                    <Card content={{...featured}} />
                </ColumnContainer>
            </FlexContainer>
        </Section>
    );
}

export default Home;