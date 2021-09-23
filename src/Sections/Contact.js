import { forwardRef } from "react";
import styled from "styled-components";
import ContactForm from "../Components/ContactForm";
import HeadingContainer from "../Components/HeadingContainer";
import { RefSection } from "../Layout/Section";


const Container = styled.div`
    font-weight: lighter;
    h3 {
        font-weight: bolder;
        color: var(--lightPink);
    }
    a, p, li {
        color: var(--pinkWhite);
    }
    a {
        font-weight: 300;
    }
    li {
        margin-top: 0.4rem;
    }
`;

const Contact = forwardRef((props, ref) => {    
    
    return (
        <RefSection ref={ref} id="contact">
            <Container>
                <HeadingContainer>
                    <h2>contact</h2>
                </HeadingContainer>
                <ContactForm />
            </Container>
        </RefSection>
    );
});

export default Contact;