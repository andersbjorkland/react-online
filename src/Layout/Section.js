import DefaultLayoutContainer from './DefaultLayoutContainer';

const Section = (props) => (
    <section>
        <DefaultLayoutContainer>
            {props.children}
        </DefaultLayoutContainer>
    </section>
);



export default Section;