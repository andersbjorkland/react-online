import { useState } from "react";
import { useEffect } from "react/cjs/react.development";
import Card, { contentObject } from "../Components/Card";
import HeadingContainer from "../Components/HeadingContainer";
import Pagination from "../Components/Pagination";
import ColumnContainer from "../Layout/ColumnContainer";
import FlexContainer from "../Layout/FlexContainer";
import Section from "../Layout/Section";

const featured = [
    {
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
    },
    {
        ...contentObject,
        heading: "andersbjorkland.se",
        meta: {
            date: "March 23 2021",
            author: "Anders"
        },
        url: "https://andersbjorkland.se",
        img: {
            src: "https://res.cloudinary.com/practicaldev/image/fetch/s--C0z7yCHZ--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/ohhk3e1ivtgas3kk5tac.png",
            alt: "retro Markdown Live Editor - write markdown in an Amiga 500-inspired environment."
        },
        summary: "Something else completely. Believe me!"
    }
];

const Showcases = (props) => {

    const [page, setPage] = useState(1);
    const [card, setCard] = useState(<Card content={featured[page-1]} />);


    const pageTurn = (page) => {
        setCard(<Card content={featured[page-1]} />);
    }

    useEffect( () => {
        pageTurn(page);  
    }, [page]);
    
    
    return (
        <Section id="showcases">
            <HeadingContainer>
                <h2>showcases</h2>
            </HeadingContainer>
            <FlexContainer className="mt-4">
                <ColumnContainer>
                    <Pagination numberOfPages={featured.length} setPage={setPage} >
                        {card}
                    </Pagination>
                </ColumnContainer>
            </FlexContainer>
        </Section>
    );
}

export default Showcases;