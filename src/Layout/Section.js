import DefaultLayoutContainer from './DefaultLayoutContainer';

const Section = ({id = false, ...props}) => (
    <section id={id}>
        <DefaultLayoutContainer>
            {props.children}
        </DefaultLayoutContainer>
    </section>
);



export default Section;