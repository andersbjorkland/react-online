import styled from "styled-components";
import ContactForm from "../Components/ContactForm";
import HeadingContainer from "../Components/HeadingContainer";
import Section from "../Layout/Section";


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

const Contact = (props) => {    
    
    return (
        <Section id="contact">
            <Container>
                <HeadingContainer>
                    <h2>contact</h2>
                </HeadingContainer>
                <ContactForm />
            </Container>
        </Section>
    );
}

export default Contact;