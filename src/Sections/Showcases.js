import Card, { contentObject } from "../Components/Card";
import HeadingContainer from "../Components/HeadingContainer";
import Pagination from "../Components/Pagination";
import ColumnContainer from "../Layout/ColumnContainer";
import FlexContainer from "../Layout/FlexContainer";
import Section from "../Layout/Section";

const Showcases = (props) => {

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
        <Section id="showcases">
            <HeadingContainer>
                <h2>showcases</h2>
            </HeadingContainer>
            <FlexContainer className="mt-4">
                <ColumnContainer>
                    <Pagination numberOfPages={12}>
                        <Card content={{...featured}} />
                    </Pagination>
                </ColumnContainer>
            </FlexContainer>
        </Section>
    );
}

export default Showcases;